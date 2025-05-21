"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { Button } from "@/components/ui/button";

// Animation variants for carousel
const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
  }),
};

// Function to render star ratings
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
      />
    );
  }
  return <div className="flex mt-1">{stars}</div>; // Added mt-1 for spacing
};

export function Reviews() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3); // По умолчанию 3

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) { // 768px это стандартный breakpoint для md в Tailwind
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };
    checkMobile(); // Проверка при монтировании
    window.addEventListener('resize', checkMobile); // Проверка при изменении размера окна
    return () => window.removeEventListener('resize', checkMobile); // Очистка слушателя
  }, []);

  // Calculate the start and end indices for the current page
  const startIndex = Math.abs(page % Math.ceil(reviews.length / itemsPerPage)) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, reviews.length);
  const currentReviews = reviews.slice(startIndex, endIndex);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const paginate = useCallback((newDirection: number) => {
    setPage(prev => [(prev[0] + newDirection + totalPages) % totalPages, newDirection]);
  }, [totalPages]);

  useEffect(() => {
    if (!isPaused && reviews.length > itemsPerPage) { // Используем itemsPerPage
      const interval = setInterval(() => {
        paginate(1);
      }, 5000); 
      return () => clearInterval(interval);
    }
  }, [paginate, isPaused, itemsPerPage]); // Добавляем itemsPerPage в зависимости

  return (
    <section 
      id="reviews" 
      className="relative py-16 md:py-24 pb-12 md:pb-24" // Добавляем pb-12 для мобильных, чтобы календарь не накладывался
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-oswald font-bold text-gray-800 mb-4"> 
            Отзывы о моей работе
          </h2>
        </div>

        <div
          className="relative mb-[-5px] z-40"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-[450px] md:h-[380px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={page} // Key change triggers animation
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {currentReviews.map((review, index) => (
                  <div key={review.id} className="bg-white rounded-lg shadow-xl p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-0.5">
                        {review.name}
                      </h3>
                      {renderStars(review.rating)} 
                      <p className="text-gray-700 text-base leading-relaxed mt-3 mb-4 line-clamp-6">
                        {review.text}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500 text-xs">
                        {review.event} - {review.date}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {reviews.length > itemsPerPage && (
            <>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => paginate(-1)}
                className="absolute top-1/2 left-[-15px] md:left-[-30px] transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full shadow-lg text-gray-700 hover:text-gray-900 z-20"
                aria-label="Previous reviews"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => paginate(1)}
                className="absolute top-1/2 right-[-15px] md:right-[-30px] transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full shadow-lg text-gray-700 hover:text-gray-900 z-20"
                aria-label="Next reviews"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
          
          {reviews.length > itemsPerPage && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    const currentPage = Math.abs(page % totalPages);
                    if (idx !== currentPage) {
                        setPage([idx, idx > currentPage ? 1 : -1]);
                    }
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out focus:outline-none ${
                    Math.abs(page % totalPages) === idx
                      ? "bg-red-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to page ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "@/lib/data";
import { carouselSlide } from "@/lib/animations";
import Image from "next/image";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Рассчитываем индексы для 3 видимых карточек с учетом цикличности
  const getVisibleReviews = () => {
    const visibleIndices = [];
    for (let i = 0; i < 3; i++) {
      visibleIndices.push((currentIndex + i) % reviews.length);
    }
    return visibleIndices.map(index => reviews[index]);
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-advancing carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [handleNext, isPaused]);

  // Останавливаем автопрокрутку при наведении мышки
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Функция для отрисовки звезд рейтинга (всегда 5 звезд)
  const renderStars = () => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-[#FFC107] text-[#FFC107]" />
    ));
  };

  return (
    <section id="reviews" className="relative py-20 overflow-x-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Отзывы о моей работе
          </h2>
        </div>
        
        <div className="flex justify-center mb-16">
          <Image 
            src="/host/otz.webp" 
            alt="Отзывы" 
            width={600} 
            height={400} 
            className="rounded-lg"
          />
        </div>
        
        <div 
          className="relative max-w-6xl mx-auto"
        >
          {/* Кнопки навигации */}
          <button
            aria-label="Предыдущий отзыв"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2C2C2C] hover:bg-[#444444] text-white rounded-full shadow-lg p-1.5 transition-colors duration-200 border border-[#444444]"
            style={{marginLeft: '-16px', width: 32, height: 32, minWidth: 32, minHeight: 32}}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            aria-label="Следующий отзыв"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2C2C2C] hover:bg-[#444444] text-white rounded-full shadow-lg p-1.5 transition-colors duration-200 border border-[#444444]"
            style={{marginRight: '-16px', width: 32, height: 32, minWidth: 32, minHeight: 32}}
          >
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
          <div className="relative overflow-x-visible px-4">
            <AnimatePresence initial={false} mode="wait">
              <div className="flex justify-between gap-6 mb-8">
                {getVisibleReviews().map((review, idx) => (
                  <motion.div
                    key={`${review.id}-${currentIndex + idx}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md p-5 flex-1 flex flex-col"
                    style={{ minHeight: '320px' }}
                  >
                    <div className="mb-3">
                      <h3 className="font-bold text-xl">{review.name}</h3>
                      <div className="flex mt-1">
                        {renderStars()}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-gray-700 line-clamp-6 mb-2">
                        {review.text}
                      </p>
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <p className="text-gray-500 text-sm">
                        {review.event}, {review.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
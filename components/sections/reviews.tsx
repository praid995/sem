"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { reviews } from "@/lib/data";
import { carouselSlide } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { BackgroundPattern } from "@/components/ui/background-pattern";

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-advancing carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 6000); // Change slide every 6 seconds
      
      return () => clearInterval(interval);
    }
  }, [handleNext, isPaused]);

  return (
    <section id="reviews" className="relative py-20 bg-gradient-to-b from-[#1C2526] to-[#1C2526]/90">
      <BackgroundPattern 
        baseColor="#1C2526" 
        accentColor="#D99282" 
        secondaryColor="#F20505" 
        opacity={0.25}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Отзывы о моей работе
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            За 8 лет я провел более 500 мероприятий различного формата. Вот что говорят мои клиенты:
          </p>
        </div>
        
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative h-96 md:h-80 overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={carouselSlide(direction)}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-10"
              >
                <Quote className="text-[#D99282] w-10 h-10 md:w-14 md:h-14 mb-4 opacity-50" />
                <p className="text-gray-100 text-center text-lg md:text-xl italic mb-6 max-w-3xl">
                  {reviews[currentIndex].text}
                </p>
                <div className="text-center">
                  <p className="font-heading font-bold text-[#D99282]">
                    {reviews[currentIndex].name}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {reviews[currentIndex].event}, {reviews[currentIndex].date}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-3">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border-[#D99282]/50 hover:border-[#D99282] hover:bg-[#D99282]/10 text-[#D99282]"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  currentIndex === idx 
                    ? "bg-[#D99282]" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
            
            <Button 
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="w-10 h-10 rounded-full border-[#D99282]/50 hover:border-[#D99282] hover:bg-[#D99282]/10 text-[#D99282]"
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, slideUp, slideRight } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { VideoButton } from "@/components/ui/video-button";
import { hostImages } from "@/lib/data";
import { BackgroundPattern } from "@/components/ui/background-pattern";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOpenCalendar = () => {
    const calendarSection = document.getElementById("booking-calendar");
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: "smooth" });
    }
    
    if (window.trackEvent) {
      window.trackEvent("cta_click");
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#1C2526]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C2526]/90 z-10"></div>
      
      <div className="absolute inset-0 opacity-40">
        <Image 
          src={hostImages.hero}
          alt="Семён Суродин на фоне студийного света"
          fill
          style={{ objectFit: "cover" }}
          quality={90}
          priority
          className="blur-[2px]"
        />
      </div>
      
      <BackgroundPattern 
        baseColor="#1C2526" 
        accentColor="#fbf7e4" 
        secondaryColor="#F20505" 
        opacity={0.3}
      />
      
      <div className="container max-w-4xl relative z-20 px-4 py-20 lg:py-32 mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-center gap-8 lg:gap-12">
        <motion.div 
          className="w-full lg:w-1/2 text-center lg:text-left"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeIn}
        >
          <motion.h1 
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight"
            variants={slideRight}
          >
            Семён Суродин
            <span className="block text-[#fbf7e4]">ведущий мероприятий</span>
          </motion.h1>
          
          <motion.p 
             className="text-3xl md:text-4xl text-[#fbf7e4] mb-8 max-w-xl mx-auto lg:mx-0 great-vibes"
             variants={slideUp}
          >
            Создаю атмосферу, в которой каждый гость чувствует себя важной частью события
          </motion.p>
          
          <motion.div
            variants={slideUp}
            custom={1}
            className="flex flex-col items-center lg:items-start"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full gap-6">
              <Button 
                onClick={handleOpenCalendar}
                size="lg" 
                className="w-full sm:w-auto text-lg px-8 py-6 bg-[#fbf7e4] hover:bg-[#b87a6c] font-medium max-w-[300px]"
                data-track="cta"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Забронировать дату
              </Button>
              <VideoButton />
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[307px] h-[307px] md:w-[384px] md:h-[384px] lg:w-[461px] lg:h-[540px] rounded-full lg:rounded-2xl overflow-hidden border-4 border-[#fbf7e4]/80 shadow-2xl">
            <Image
              src="/host/lampa.webp"
              alt="Семён Суродин"
              fill
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <button 
          onClick={() => {
            const reviewsSection = document.getElementById("reviews");
            if (reviewsSection) {
              reviewsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          aria-label="Scroll down"
          className="text-white/80 hover:text-white"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </button>
      </div>
    </section>
  );
}
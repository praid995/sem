"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BackgroundPattern } from "@/components/ui/background-pattern";

export function QuoteSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set a small delay for the animation to begin after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const leftVariant = {
    hidden: { x: "-120%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Expo ease out for a more dramatic effect
        delay: 0.2
      }
    }
  };

  const rightVariant = {
    hidden: { x: "120%", opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1], // Expo ease out
        delay: 0.7 // Delay the second line
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 1.5, 
        delay: 0.1 
      } 
    }
  };

  const glowAnimation = {
    animate: {
      textShadow: [
        "0 0 4px rgba(255,255,255,0.1)",
        "0 0 8px rgba(255,255,255,0.3)",
        "0 0 4px rgba(255,255,255,0.1)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <section className="relative py-48 bg-[#1C2526] overflow-hidden">
      <BackgroundPattern 
        baseColor="#1C2526" 
        accentColor="#fbf7e4" 
        secondaryColor="#F20505" 
        opacity={0.2}
      />
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1C2526]/70"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      />

      <div className="container relative z-10 mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center text-center min-h-[650px] py-16">
          <div className="w-full max-w-7xl mx-auto overflow-visible px-4 md:px-12 lg:px-20">
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-10 text-white"
              style={{ 
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                background: "linear-gradient(to right, #F3E9DC, #fbf7e4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                overflowWrap: "break-word",
                wordWrap: "break-word",
                hyphens: "auto",
                width: "100%",
                display: "block",
                letterSpacing: "0.05em",
                paddingTop: "30px",
                transform: "scale(0.95)",
                transformOrigin: "center center",
                lineHeight: "1.4"
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={leftVariant}
            >
              Я ВЕДУЩИЙ, ПОТОМУ ЧТО ВЕДУ,
            </motion.div>
            
            <motion.div
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white"
              style={{ 
                fontFamily: "'Bebas Neue', sans-serif",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                background: "linear-gradient(to right, #fbf7e4, #F3E9DC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                color: "transparent",
                overflowWrap: "break-word",
                wordWrap: "break-word",
                hyphens: "auto",
                width: "100%",
                display: "block",
                letterSpacing: "0.05em",
                paddingBottom: "40px",
                transform: "scale(0.95)",
                transformOrigin: "center center",
                lineHeight: "1.4"
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={rightVariant}
            >
              А ОСТАЛЬНЫЕ — ПРОСТО ПРОВОДЯТ!
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 
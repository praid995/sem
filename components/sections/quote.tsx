"use client";

import React from 'react';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <section className="relative py-48 overflow-hidden bg-brand-background">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center min-h-[50vh] py-16">
          <div className="w-full max-w-6xl mx-auto">
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8 font-bebas-neue"
              style={{ 
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                background: "linear-gradient(135deg, #F20505, #2c2c2c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                lineHeight: "1.2"
              }}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={leftVariant}
            >
              Я ВЕДУЩИЙ, ПОТОМУ ЧТО ВЕДУ,
            </motion.div>
            
            <motion.div
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas-neue"
              style={{ 
                textShadow: "2px 2px 4px rgba(0,0,0,0.2)",
                background: "linear-gradient(135deg, #2c2c2c, #F20505)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.05em",
                lineHeight: "1.2"
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
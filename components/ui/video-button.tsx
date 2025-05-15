"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play } from "lucide-react";

export function VideoButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Ошибка видео:', e);
    setError(true);
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="relative group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative w-[120px] h-[120px] flex items-center justify-center">
          <motion.svg 
            className="absolute w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <path
              id="circle"
              d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[#D99282] opacity-50"
            />
            <text className="text-[16px] fill-[#D0D5D9]">
              <textPath href="#circle" startOffset="0%">
                моя визитка • &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; моя визитка •
              </textPath>
            </text>
          </motion.svg>
          <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#D99282]/20 flex items-center justify-center backdrop-blur-sm transition-colors group-hover:bg-[#D99282]/30">
            <Play className="w-8 h-8 text-[#D99282] transition-transform group-hover:scale-110" />
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsOpen(false);
              setError(false);
            }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {error ? (
                <div className="absolute inset-0 flex items-center justify-center bg-[#1C2526] text-[#D0D5D9]">
                  <p className="text-center">
                    Извините, видео временно недоступно.<br/>
                    Пожалуйста, попробуйте позже.
                  </p>
                </div>
              ) : (
                <video
                  src="/host/video/vid_vizitka.MP4"
                  className="absolute inset-0 w-full h-full"
                  controls
                  autoPlay
                  onError={handleVideoError}
                  playsInline
                  preload="auto"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/lib/data";
import { BackgroundPattern } from "@/components/ui/background-pattern";

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Состояние для открытой фотографии
  const [openedImage, setOpenedImage] = useState<string | null>(null);
  
  // Set up parallax scrolling effect for images
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Функция для открытия фотографии
  const openImage = (src: string) => {
    setOpenedImage(src);
  };
  
  // Функция для закрытия фотографии
  const closeImage = () => {
    setOpenedImage(null);
  };

  return (
    <section id="gallery" className="relative py-20 bg-[#1C2526]" ref={containerRef}>
      <BackgroundPattern 
        baseColor="#1C2526" 
        accentColor="#D99282" 
        secondaryColor="#F20505" 
        opacity={0.2}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Фотогалерея
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Моменты с проведенных мною мероприятий разных форматов
          </p>
        </div>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mt-8 [column-fill:_balance] w-full">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.id}
            className="relative mb-4 break-inside-avoid cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openImage(image.src)}
            style={{
              aspectRatio: `${image.width} / ${image.height}`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="rounded-lg object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </motion.div>
        ))}
      </div>
      </div>
      
      {/* Модальное окно для просмотра фотографий */}
      <AnimatePresence>
        {openedImage && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div 
              className="relative w-full max-w-5xl max-h-[90vh] rounded-lg overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div className="relative w-full h-[90vh]">
                <Image
                  src={openedImage}
                  alt="Увеличенное изображение"
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-lg"
                  priority
                />
              </div>
              <button 
                className="absolute top-4 right-4 bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/40 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImage();
                }}
              >
                <span className="text-2xl">&times;</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
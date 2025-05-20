"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideUp } from "@/lib/animations";
import { aboutTimelineData, hostImages } from "@/lib/data";

export function AboutTimeline() {
  return (
    <section id="about" className="relative py-20 overflow-x-hidden">
      <div className="container max-w-6xl relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            Обо мне
          </h2>
          <p className="text-[#1C1C1C]/80 max-w-2xl mx-auto text-lg md:text-xl">
            Рыба по гороскопу – Ведущий по факту
          </p>
        </motion.div>

        <div className="flex flex-col gap-16">
          {aboutTimelineData.map((item, idx) => {
            // Используем item.img если есть, иначе старую логику imgIdx
            const imgSrc = item.img ? item.img : `/host/${(() => {
              let imgIdx = idx + 1;
              if (imgIdx === 3) imgIdx = 5;
              else if (imgIdx === 5) imgIdx = 3;
              return imgIdx;
            })()}.webp`;
            return (
              <motion.div
                key={idx}
                className={`flex flex-col md:flex-row ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-8 md:gap-16 md:justify-center`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUp}
                custom={idx}
              >
                {/* Фото */}
                <div className={`w-full md:w-1/2 flex justify-center md:items-start`}>
                  <div className="relative w-[240px] h-[320px] rounded-lg overflow-hidden shadow-xl bg-white flex items-center">
                    <Image
                      src={imgSrc}
                      alt={item.year}
                      fill
                      style={{ objectFit: "cover" }}
                      className="hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                {/* Текст */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
                  <h3 className="font-heading text-2xl text-[#D99282] mb-2">{item.year}</h3>
                  <p className="text-[#1C1C1C] text-xl max-w-xl">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
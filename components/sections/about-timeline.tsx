"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideUp } from "@/lib/animations";
import { aboutTimelineData } from "@/lib/data";

const aboutImages = [
  "/host/2.webp",
  "/host/5.webp",
  "/host/rap.webp",
  "/host/3.webp",
  "/host/ok.webp",
];

const combinedAboutData = aboutTimelineData.map((item, index) => ({
  ...item,
  imageSrc: aboutImages[index % aboutImages.length],
  altText: item.year,
}));

export function AboutTimeline() {
  return (
    <section 
      id="about" 
      className="relative py-12 md:py-20 overflow-x-hidden"
      style={{ 
        backgroundImage: "url('/site/phon.webp')", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="container max-w-5xl relative z-10 mx-auto px-4">
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-3 md:mb-4">
            Обо мне
          </h2>
          <p className="text-[#1C1C1C]/80 max-w-2xl mx-auto text-base md:text-xl">
            Рыба по гороскопу – Ведущий по факту
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-20">
          {combinedAboutData.map((item, index) => (
            <motion.div
              key={item.year}
              className="flex flex-col md:grid md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={slideUp}
              custom={index}
            >
              <div
                className={`p-6 rounded-lg bg-white shadow-xl w-full order-1 text-center md:text-left ${
                  index % 2 === 0 ? "md:order-1" : "md:order-3"
                }`}
              >
                <h3 className="font-heading text-xl md:text-3xl text-[#D99282] mb-2 md:mb-4">
                  {item.year}
                </h3>
                <p className="text-[#1C1C1C] text-base md:text-xl leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="hidden md:flex order-2 h-full w-px items-center justify-center">
                <svg height="80%" width="2" className="fill-current text-gray-300">
                  <rect width="2" height="100%" />
                </svg>
              </div>

              <div
                className={`relative w-full max-w-[240px] h-[320px] mx-auto md:w-full md:max-w-none md:h-auto md:aspect-[3/4] rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${
                  index % 2 === 0 ? "md:order-3" : "md:order-1"
                } order-2`}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.altText}
                  fill
                  style={{ objectFit: "contain" }}
                  className="hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 767px) 240px, (max-width: 1024px) 50vw, 450px"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
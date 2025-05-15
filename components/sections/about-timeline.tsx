"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideUp } from "@/lib/animations";
import { aboutTimelineData, hostImages } from "@/lib/data";
import { BackgroundPattern } from "@/components/ui/background-pattern";

export function AboutTimeline() {
  return (
    <section id="about" className="relative py-20 bg-[#260705]">
      <BackgroundPattern 
        baseColor="#260705" 
        accentColor="#D99282" 
        secondaryColor="#F20505" 
        opacity={0.3}
      />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#D0D5D9] mb-4">
            Обо мне
          </h2>
          <p className="text-[#D0D5D9]/80 max-w-2xl mx-auto text-lg md:text-xl">
            Ключевые моменты моего пути
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="relative hidden md:block"
          >
            <div className="sticky top-20">
              <div className="relative">
                <div className="relative h-[800px] w-full">
                  <motion.div
                    className="absolute z-10 top-0 left-[5%] w-[240px] h-[320px] shadow-xl"
                    initial={{ opacity: 0, y: 30, rotate: -5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <Image
                        src="/host/1.webp"
                        alt="Семён Суродин фото 1"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute z-20 top-[20px] right-[5%] w-[240px] h-[320px] shadow-xl"
                    initial={{ opacity: 0, y: 30, rotate: 6 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 6 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <Image
                        src="/host/2.webp"
                        alt="Семён Суродин фото 2"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute z-30 top-[380px] left-[8%] w-[240px] h-[320px] shadow-xl"
                    initial={{ opacity: 0, y: 30, rotate: -8 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -8 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <Image
                        src="/host/rap.webp"
                        alt="Семён Суродин рэп выступление"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute z-35 top-[400px] right-[8%] w-[240px] h-[320px] shadow-xl"
                    initial={{ opacity: 0, y: 30, rotate: 5 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <Image
                        src="/host/5.webp"
                        alt="Семён Суродин фото 5"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute z-50 top-[780px] left-[5%] w-[240px] h-[320px] shadow-xl"
                    initial={{ opacity: 0, y: 30, rotate: -4 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <Image
                        src="/host/3.webp"
                        alt="Семён Суродин фото 3"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute z-50 top-[800px] right-[5%] w-[240px] h-[320px] shadow-xl"
                    initial={{ opacity: 0, y: 30, rotate: 7 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 7 }}
                    transition={{ duration: 0.7, delay: 1.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-full h-full relative overflow-hidden rounded-lg">
                      <Image
                        src="/host/ok.webp"
                        alt="Семён Суродин ОК"
                        fill
                        style={{ objectFit: "cover" }}
                        className="hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="relative md:hidden mb-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/host/1.webp"
                  alt="Семён Суродин фото 1"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/host/2.webp"
                  alt="Семён Суродин фото 2"
                  fill
                  style={{ objectFit: "cover" }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            {aboutTimelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative pl-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={slideUp}
                custom={index}
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#D99282]/30" />
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-[#D99282]" />
                
                <div className="bg-[#1C2526]/50 rounded-lg p-6 backdrop-blur-sm">
                  <h3 className="font-heading text-2xl text-[#D99282] mb-2">
                    {item.year}
                  </h3>
                  <p className="text-[#D0D5D9] text-xl">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
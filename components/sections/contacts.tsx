"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { socialLinks, hostImages } from "@/lib/data";
import { slideUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { MessageCircle, Send, Globe, Instagram } from "lucide-react";

export function Contacts() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageCircle":
        return <MessageCircle className="h-5 w-5" />;
      case "Send":
        return <Send className="h-5 w-5" />;
      case "Globe":
        return <Globe className="h-5 w-5" />;
      case "Instagram":
        return <Instagram className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section id="contacts" className="relative py-20 overflow-x-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Связаться со мной
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Выберите удобный для вас способ связи, и я отвечу в ближайшее время
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            className="relative"
          >
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src={hostImages.phone}
                alt="Семён Суродин с телефоном"
                fill
                style={{ objectFit: "cover", objectPosition: "center center" }}
                className="hover:scale-105 transition-transform duration-500 rounded-xl"
              />
            </div>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div 
              className="flex flex-wrap justify-center gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUp}
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="px-6 py-6 rounded-xl border-[#222]/30 hover:border-[#444] bg-transparent text-[#222] hover:text-[#444] text-lg transition-colors duration-200"
                  >
                    <a href={link.link} target="_blank" rel="noopener noreferrer" data-track="cta">
                      {getIcon(link.icon)}
                      <span className="ml-2">{link.name}</span>
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                custom={2}
              >
                <p className="text-gray-400 text-lg mb-2">
                  Телефон для связи
                </p>
                <p className="text-white text-2xl contact-info">
                  <a href="tel:+79222245645" className="hover:text-[#555555]">
                    +7 (922) 224-56-45
                  </a>
                </p>
              </motion.div>
              
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={slideUp}
                custom={3}
                className="mt-6"
              >
                <p className="text-gray-400 text-lg mb-2">
                  Электронная почта
                </p>
                <p className="text-white text-2xl contact-info">
                  <a href="mailto:surodin.semyon@yandex.ru" className="hover:text-[#555555]">
                    surodin.semyon@yandex.ru
                  </a>
                </p>
                {/* Кнопка для скачивания договора — по центру под email */}
                <div className="flex justify-center mt-4">
                  <a
                    href="/111DOGOVOR_SVAD_BA.docx"
                    download
                    className="px-6 py-3 rounded-full bg-[#333333] text-[#fbf7e4] font-bold text-lg shadow-lg hover:bg-[#555555] transition-colors duration-300"
                  >
                    Смотреть договор
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { VideoButton } from "../ui/video-button";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section id="hero" className="relative flex items-start min-h-[80vh] overflow-hidden pt-8 md:pt-12 pb-0">
        {/* SVG-узор по краям УДАЛЕН, так как он теперь глобальный в app/layout.tsx */}
        {/* 
        <svg
          className="pointer-events-none absolute left-0 top-0 h-full w-full z-0"
          width="100%"
          height="100%"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="-200" cy="540" r="500" fill="#ECECEC" fillOpacity="0.7" />
          <circle cx="1920" cy="200" r="180" fill="#ECECEC" fillOpacity="0.5" />
          <circle cx="1920" cy="800" r="120" fill="#ECECEC" fillOpacity="0.4" />
        </svg>
        */}

        {/* Основной контент: Фото и Заголовки */}
        <div className="relative w-full h-full" style={{ transform: 'translateX(52px)' }}>
          <div className="container max-w-6xl w-full relative z-10 px-4 mx-auto flex flex-col md:flex-row items-start justify-center gap-4 md:gap-8 lg:gap-12">
            {/* Фото ведущего и лента */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end md:items-end mt-[-40px] md:mt-[-80px] lg:mt-[-120px] relative z-10 md:ml-[-40px] lg:ml-[-80px]">
              <div className="relative w-[272px] h-[416px] md:w-[336px] md:h-[560px] lg:w-[400px] lg:h-[680px] xl:w-[480px] xl:h-[800px] flex flex-col items-center justify-end">
                <Image 
                  src="/host/prozz.webp"
                  alt="Семён Суродин"
                  fill
                  style={{ objectFit: "contain" }}
                  className="relative z-20"
                  priority
                />
              </div>
            </div>
            {/* Текст */}
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-start md:ml-[-61px] mt-2 md:mt-0 relative z-10">
              <h1
                className="font-oswald leading-none font-normal mb-2"
                style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)', lineHeight: 1, letterSpacing: '0.08em', fontWeight: 400 }}
              >
                Семён<br />Суродин
              </h1>
              <div 
                className="font-oswald text-base md:text-lg lg:text-xl mt-4 md:mt-6 lg:mt-8 tracking-widest" 
                style={{ letterSpacing: '0.12em', fontWeight: 400, fontSize: 'clamp(0.8rem, 2vw, 1.25rem)' }}
              >
                КОРПОРАТИВЫ | СВАДЬБЫ | ДР | ВЕЧЕРИНКИ
              </div>

              {/* Кнопка видео — круглая, с крутящимися фразами */}
              <div className="mt-8 flex justify-center w-full">
                <VideoButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Блок с lin2.webp */}
      <div className="relative w-full overflow-hidden" style={{ minHeight: '80px' }}>
        <img
          src="/site/lin2.webp"
          alt="Создаю мероприятия"
          className="w-full object-contain"
          style={{ minHeight: '80px', maxHeight: '120px', height: 'auto', position: 'relative' }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <h2 className="text-white text-2xl md:text-4xl font-bold tracking-widest text-center whitespace-nowrap drop-shadow-lg">
            СОЗДАЮ МЕРОПРИЯТИЯ, НА КОТОРЫХ ВЫ КАЙФУЕТЕ
          </h2>
        </div>
      </div>
    </>
  );
}
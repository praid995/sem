import Image from 'next/image';
import { AboutBlock } from '../ui/about-block';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-oswald mb-8 text-center md:text-left">
          Обо мне
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="order-1">
            <div className="space-y-8">
              <AboutBlock
                title="Путь"
                text="Окончил музыкальную школу, работал в ресторане, выступал на радио, провёл более 500 мероприятий"
              />
              <AboutBlock
                title="Увлечения"
                text="Играю на баяне, читаю книги, пишу рэп"
              />
              <AboutBlock
                title="Философия"
                text="Каждый гость чувствует себя важной частью любого события"
              />
              <AboutBlock
                title="Миссия"
                text="Моя миссия – чтобы вы заказали меня ещё раз; помогают мне в этом импровизация и юмор"
              />
            </div>
          </div>
          
          <div className="order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4]">
              <Image
                src="/host/5.webp"
                alt="Семён фото"
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
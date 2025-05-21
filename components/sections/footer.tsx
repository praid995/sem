"use client";

import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 bg-[#ececec]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-heading text-xl text-[#2a2929]">
              Семён Суродин
            </p>
            <p className="text-sm text-[#2a2929]/80">
              Ведущий мероприятий
            </p>
          </div>
          
          <div className="text-sm text-center md:text-right text-[#2a2929]/80">
            <p className="mb-1">
              © {currentYear} Все права защищены
            </p>
            <p className="flex items-center justify-center md:justify-end">
              Создано с <Heart className="h-3 w-3 mx-1 text-[#F20505]" /> в России
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-400 text-sm text-center text-[#2a2929]/60">
          <p>
            Этот сайт собирает и обрабатывает персональные данные в соответствии с политикой конфиденциальности.
          </p>
        </div>
      </div>
    </footer>
  );
}
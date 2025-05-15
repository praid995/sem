"use client";

declare global {
  interface Window {
    trackEvent?: (eventName: string) => void;
  }
}

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { eventPricingPlans } from "@/lib/wedding_pricing";

import type { EventPricingPlan } from "@/lib/wedding_pricing";
import { slideUp, staggerChildren } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { BackgroundPattern } from "@/components/ui/background-pattern";

export function Pricing() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const scrollToCalendar = () => {
    const calendarSection = document.getElementById("booking-calendar");
    if (calendarSection) {
      calendarSection.scrollIntoView({ behavior: "smooth" });
    }
    
    // Track click event
    if (window.trackEvent) {
      window.trackEvent("cta_click");
    }
  };

  const handleTariffSelect = (plan: EventPricingPlan) => {
    // Создаем и диспатчим кастомное событие с выбранным тарифом
    const event = new CustomEvent('tariffSelected', {
      detail: { tariff: plan.name }
    });
    window.dispatchEvent(event);
    
    // Прокручиваем к форме бронирования
    const bookingSection = document.getElementById("booking-calendar");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="pricing" className="relative py-20 bg-[#1C2526]">
      <BackgroundPattern 
        baseColor="#1C2526" 
        accentColor="#fbf7e4" 
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Тарифы
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Выберите подходящий для вас тариф
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {eventPricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              className={`relative bg-[#1e2c2d] rounded-xl p-6 shadow-xl transition-all duration-500 ease-in-out group
                hover:bg-[#fbf7e4] cursor-pointer`}
              onMouseEnter={() => setActiveCard(plan.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => handleTariffSelect(plan)}
              variants={slideUp}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#F20505] text-white px-4 py-1 rounded-full text-sm">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-[#fbf7e4] group-hover:text-[#1e2c2d] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#D99282] text-3xl font-bold mb-2 group-hover:text-[#F20505]">
                  {plan.price}
                </p>
                {plan.description && (
                  <p className="text-gray-400 text-sm group-hover:text-gray-600">
                    {plan.description}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#D99282] group-hover:text-[#F20505] mr-2 shrink-0" />
                    <span className="text-[#D0D5D9] group-hover:text-[#1e2c2d]">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handleTariffSelect(plan)}
                className={`w-full transition-colors duration-300 mt-2
                  ${plan.isPopular 
                    ? "bg-[#F20505] text-[#fbf7e4] group-hover:bg-[#fbf7e4] group-hover:text-[#F20505]" 
                    : "bg-[#fbf7e4] text-[#1e2c2d] group-hover:bg-[#1e2c2d] group-hover:text-[#fbf7e4]"
                  }`}
                data-track="cta"
              >
                Выбрать
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10 text-gray-400 max-w-2xl mx-auto">
          <p className="text-sm">
            * Все цены указаны для мероприятий в пределах города. 
            Для выездных торжеств предусмотрена дополнительная плата за транспортные расходы.
          </p>
        </div>
      </div>
    </section>
  );
}
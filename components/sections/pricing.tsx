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

const pricingStyles = {
  backgroundColor: '#e01f1f',
  color: 'white'
};

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
    <section id="pricing" className="relative py-20 bg-[#e01f1f] overflow-x-hidden">
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
          <p className="text-white max-w-2xl mx-auto">
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
              className="relative bg-white rounded-xl p-6 shadow-xl transition-all duration-300 ease-in-out"
              onMouseEnter={() => setActiveCard(plan.id)}
              onMouseLeave={() => setActiveCard(null)}
              onClick={() => handleTariffSelect(plan)}
              variants={slideUp}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#e01f1f] text-white px-4 py-1 rounded-full text-sm">
                    Популярный выбор
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-2xl font-bold text-[#1e1e1e] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#e01f1f] text-3xl font-bold mb-2">
                  {plan.price}
                </p>
                {plan.description && (
                  <p className="text-gray-600 text-sm">
                    {plan.description}
                  </p>
                )}
              </div>

              <div className="space-y-4 mb-6">
                {plan.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#2c5b43] mr-2 shrink-0" />
                    <span className="text-[#1e1e1e]">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                onClick={() => handleTariffSelect(plan)}
                className={`w-full transition-colors duration-300 mt-2
                  ${plan.isPopular 
                    ? "bg-[#e01f1f] text-white hover:bg-[#c01a1a] hover:text-white" 
                    : "bg-[#2c5b43] text-white hover:bg-[#234936] hover:text-white"
                  }`}
                data-track="cta"
              >
                Выбрать
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10 text-white max-w-2xl mx-auto">
          <p className="text-sm">
            * Все цены указаны для мероприятий в пределах города. 
            Для выездных торжеств предусмотрена дополнительная плата за транспортные расходы.
          </p>
        </div>
      </div>
    </section>
  );
}
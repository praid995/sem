"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/lib/utils";
import { slideUp } from "@/lib/animations";
import type { SelectSingleEventHandler, BookingFormData } from "@/lib/types";

export function BookingCalendar() {
  const [formData, setFormData] = useState<BookingFormData>({
    selectedDate: null,
    eventType: "",
    selectedTariff: "",
    name: "",
    isUndecidedTariff: false
  });

  // Функция для перехода к разделу тарифов
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Эффект для обработки выбора тарифа из раздела Pricing
  useEffect(() => {
    const handleTariffSelection = (event: CustomEvent<{ tariff: string }>) => {
      setFormData(prev => ({
        ...prev,
        selectedTariff: event.detail.tariff,
        isUndecidedTariff: false
      }));
      
      const bookingSection = document.getElementById("booking-calendar");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener('tariffSelected', handleTariffSelection as EventListener);
    return () => {
      window.removeEventListener('tariffSelected', handleTariffSelection as EventListener);
    };
  }, []);

  const handleSubmit = async () => {
    const { selectedDate, eventType, selectedTariff, isUndecidedTariff, name } = formData;
    
    if (!selectedDate || !eventType || (!selectedTariff && !isUndecidedTariff) || !name) {
      alert("Пожалуйста, заполните все обязательные поля");
      return;
    }

    // TODO: Здесь будет логика отправки формы
    console.log({
      date: selectedDate,
      eventType,
      tariff: isUndecidedTariff ? "Не определился" : selectedTariff,
      name
    });
  };

  const handleSelect: SelectSingleEventHandler = (day: Date | undefined) => {
    if (day) {
      setFormData(prev => ({ ...prev, selectedDate: day }));
      // Прокручиваем к форме на мобильных устройствах
      if (window.innerWidth <= 768) {
        const formElement = document.querySelector('.booking-form');
        if (formElement) {
          formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <section id="booking-calendar" className="relative py-20 bg-white overflow-x-hidden">
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#1e1e1e] mb-4">
            Забронировать дату
          </h2>
          <p className="text-[#444444] max-w-2xl mx-auto">
            Выберите интересующую вас дату, и я свяжусь с вами, чтобы обсудить детали вашего мероприятия
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            className="bg-[#F5F5F5] rounded-xl p-6 shadow-lg mx-auto w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            custom={1}
          >
            <div className="flex items-center justify-center mb-4">
              <CalendarIcon className="mr-2 h-5 w-5 text-[#444444]" />
              <h3 className="font-heading text-xl font-bold text-[#1e1e1e]">
                Выберите дату
              </h3>
            </div>
            
            <Calendar
              mode="single"
              selected={formData.selectedDate || undefined}
              onSelect={handleSelect}
              locale={ru}
              className="border-0 mx-auto"
              modifiersClassNames={{
                selected: "bg-[#F5F5F5] text-[#1e1e1e] font-bold hover:bg-[#F5F5F5]"
              }}
              disabled={(date) => {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today;
              }}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            custom={2}
          >
            <div className="bg-[#F5F5F5] rounded-xl p-6 shadow-lg booking-form h-full">
              <div className="space-y-4">
                {/* Дата */}
                <div>
                  <Label htmlFor="selected-date" className="text-[#1e1e1e]">Выбранная дата</Label>
                  <div className="mt-1 p-3 bg-white rounded-md text-[#1e1e1e]">
                    {formData.selectedDate ? format(formData.selectedDate, 'dd.MM.yyyy', { locale: ru }) : 'Дата не выбрана'}
                  </div>
                </div>

                {/* Вид мероприятия */}
                <div>
                  <Label htmlFor="event-type" className="text-[#1e1e1e]">Какое мероприятие планируете?</Label>
                  <Input
                    id="event-type"
                    value={formData.eventType}
                    onChange={(e) => setFormData(prev => ({ ...prev, eventType: e.target.value }))}
                    className="mt-1 bg-white border-gray-200 text-[#1e1e1e]"
                    placeholder="Укажите тип мероприятия"
                  />
              </div>
              
                {/* Тариф */}
                <div>
                  <Label className="text-[#1e1e1e]">Тариф</Label>
                  <div className="mt-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div 
                        className={`p-3 bg-white rounded-md text-[#1e1e1e] flex-1 mr-2 cursor-pointer ${
                          formData.isUndecidedTariff ? 'opacity-50' : ''
                        }`}
                        onClick={() => {
                          if (!formData.isUndecidedTariff) {
                            scrollToPricing();
                          }
                        }}
                      >
                        {formData.selectedTariff || 'Выберите тариф'}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="undecided"
                          checked={formData.isUndecidedTariff}
                          onCheckedChange={(checked) => {
                            setFormData(prev => ({
                              ...prev,
                              isUndecidedTariff: checked as boolean,
                              selectedTariff: checked ? '' : prev.selectedTariff
                            }));
                          }}
                        />
                        <label
                          htmlFor="undecided"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#1e1e1e]"
                        >
                          Ещё не определился
                        </label>
                      </div>
                    </div>
                  </div>
                        </div>

                {/* Имя */}
                <div>
                  <Label htmlFor="name" className="text-[#1e1e1e]">Ваше имя</Label>
                            <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1 bg-white border-gray-200 text-[#1e1e1e]"
                    placeholder="Введите ваше имя"
                            />
                          </div>

                {/* Кнопка отправки */}
                        <Button 
                  onClick={handleSubmit}
                  className="w-full py-6 bg-[#1e1e1e] hover:bg-[#444444] text-white"
                  disabled={!formData.selectedDate || !formData.eventType || (!formData.selectedTariff && !formData.isUndecidedTariff) || !formData.name}
                >
                  Забронировать дату
                        </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
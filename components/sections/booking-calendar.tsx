"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { Calendar as CalendarIcon, CalendarCheck, User } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/lib/utils";
import { slideUp } from "@/lib/animations";
import { BackgroundPattern } from "@/components/ui/background-pattern";
import { SelectSingleEventHandler } from "@/components/ui/calendar";

export function BookingCalendar() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [eventType, setEventType] = useState("");
  const [selectedTariff, setSelectedTariff] = useState("");
  const [name, setName] = useState("");
  const [isUndecidedTariff, setIsUndecidedTariff] = useState(false);

  // Функция для перехода к разделу тарифов
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Эффект для обработки выбора тарифа из раздела Pricing
  useEffect(() => {
    const handleTariffSelection = (event: CustomEvent) => {
      setSelectedTariff(event.detail.tariff);
      setIsUndecidedTariff(false);
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

  const handleSelect: SelectSingleEventHandler = (day) => {
    setSelectedDate(day);
    // Прокручиваем к форме на мобильных устройствах
    if (window.innerWidth <= 768) {
      const formElement = document.querySelector('.booking-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section id="booking-calendar" className="relative py-20 bg-[#1C2526]">
      <BackgroundPattern 
        baseColor="#1C2526" 
        accentColor="#D99282" 
        secondaryColor="#F20505" 
        opacity={0.25}
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
            Забронировать дату
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Выберите интересующую вас дату, и я свяжусь с вами, чтобы обсудить детали вашего мероприятия
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          <motion.div 
            className="bg-[#1e2c2d] rounded-xl p-6 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
            custom={1}
          >
            <div className="flex items-center justify-center mb-4">
              <CalendarIcon className="mr-2 h-5 w-5 text-[#D99282]" />
              <h3 className="font-heading text-xl font-bold text-white">
                Выберите дату
              </h3>
            </div>
            
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleSelect}
              locale={ru}
              className="border-0"
              modifiersClassNames={{
                selected: "bg-[#F20505] text-white hover:bg-[#F20505]"
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
            <div className="bg-[#1e2c2d] rounded-xl p-6 shadow-lg booking-form">
              <div className="space-y-4">
                {/* Дата */}
                <div>
                  <Label htmlFor="selected-date" className="text-[#D0D5D9]">Выбранная дата</Label>
                  <div className="mt-1 p-3 bg-[#23292a] rounded-md text-[#D0D5D9]">
                    {selectedDate ? format(selectedDate, 'dd.MM.yyyy', { locale: ru }) : 'Дата не выбрана'}
                  </div>
                </div>

                {/* Вид мероприятия */}
                <div>
                  <Label htmlFor="event-type" className="text-[#D0D5D9]">Вид мероприятия</Label>
                  <Input
                    id="event-type"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="mt-1 bg-[#23292a] border-[#D99282]/20 text-[#D0D5D9]"
                    placeholder="Укажите вид мероприятия"
                  />
                </div>

                {/* Тариф */}
                <div>
                  <Label className="text-[#D0D5D9]">Тариф</Label>
                  <div className="mt-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <div 
                        className={`p-3 bg-[#23292a] rounded-md text-[#D0D5D9] flex-1 mr-2 cursor-pointer ${
                          isUndecidedTariff ? 'opacity-50' : ''
                        }`}
                        onClick={() => {
                          if (!isUndecidedTariff) {
                            scrollToPricing();
                          }
                        }}
                      >
                        {selectedTariff || 'Выберите тариф'}
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="undecided"
                          checked={isUndecidedTariff}
                          onCheckedChange={(checked) => {
                            setIsUndecidedTariff(checked as boolean);
                            if (checked) {
                              setSelectedTariff('');
                            }
                          }}
                        />
                        <label
                          htmlFor="undecided"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[#D0D5D9]"
                        >
                          Ещё не определился
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Имя */}
                <div>
                  <Label htmlFor="name" className="text-[#D0D5D9]">Ваше имя</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 bg-[#23292a] border-[#D99282]/20 text-[#D0D5D9]"
                    placeholder="Введите ваше имя"
                  />
                </div>

                {/* Кнопка отправки */}
                <Button
                  onClick={handleSubmit}
                  className="w-full py-6 bg-[#F20505] hover:bg-[#D99282] text-white"
                  disabled={!selectedDate || !eventType || (!selectedTariff && !isUndecidedTariff) || !name}
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
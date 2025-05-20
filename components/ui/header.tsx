"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, MessageCircle, Send, Globe, Instagram } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import Link from 'next/link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessageCircle":
        return <MessageCircle className="h-4 w-4" />;
      case "Send":
        return <Send className="h-4 w-4" />;
      case "Globe":
        return <Globe className="h-4 w-4" />;
      case "Instagram":
        return <Instagram className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ececec] shadow-md">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Кнопка гамбургер */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleToggle}
            className="text-[#2a2929] hover:bg-[#2a2929]/10 hover:text-[#2a2929]"
            aria-label="Меню"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        
        {/* Центральный логотип */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="header-font text-xl md:text-2xl text-[#2a2929]">
            SEMYON SURODIN
          </h1>
        </div>
        
        {/* Иконки контактов (десктоп) */}
        <div className="hidden md:flex items-center space-x-2">
          {socialLinks.map((link, index) => (
            <Button
              key={index}
              asChild
              variant="ghost"
              size="sm"
              className="text-[#2a2929] hover:bg-[#2a2929]/10 hover:text-[#2a2929]"
            >
              <a href={link.link} target="_blank" rel="noopener noreferrer" data-track="cta">
                {getIcon(link.icon)}
              </a>
            </Button>
          ))}
        </div>
        
        {/* Кнопка связаться (мобильная) */}
        <div className="md:hidden">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="text-[#2a2929] border-[#ececec]/50 hover:border-[#2a2929] hover:bg-[#2a2929]/10 hover:text-[#2a2929]"
          >
            <a href="tel:+79222245645">
              Связаться
            </a>
          </Button>
        </div>
        
        {/* Фон затемнения */}
        {isOpen && (
          <div 
            className="fixed inset-0 bg-[#1C2526]/50 backdrop-blur-xl z-40"
            onClick={handleClose}
            style={{ top: '64px' }}
          />
        )}
        
        {/* Боковое меню */}
        <div 
          className={`fixed top-0 left-0 h-full w-[280px] bg-[#ececec] shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } pt-16`}
        >
          <div className="p-6">
            <nav className="flex flex-col space-y-8 pb-6">
              <Link href="#hero" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Главная
                </span>
              </Link>
              <Link href="#about" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Обо мне
                </span>
              </Link>
              <Link href="#reviews" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Отзывы
                </span>
              </Link>
              <Link href="#booking-calendar" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Бронирование
                </span>
              </Link>
              <Link href="#gallery" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Галерея
                </span>
              </Link>
              <Link href="#pricing" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Тарифы
                </span>
              </Link>
              <Link href="#contacts" onClick={handleClose}>
                <span className="text-2xl font-heading text-[#2a2929] hover:text-[#F20505] transition-colors">
                  Контакты
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
} 
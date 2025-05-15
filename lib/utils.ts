import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | null): string {
  if (!date) return '';
  
  const options: Intl.DateTimeFormatOptions = { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  };
  
  return date.toLocaleDateString('ru-RU', options);
}

// Check if a date is available (this would connect to your backend in production)
export function isDateAvailable(date: Date): boolean {
  // Mock implementation - in production, this would check against your database
  // For now, random pattern of days
  if (!date) return false;
  
  // Make weekends more likely to be available
  const isWeekend = date.getDay() === 0 || date.getDay() === 6;
  const randomFactor = Math.random();
  
  // 80% of weekends are available, 40% of weekdays
  return isWeekend ? randomFactor < 0.8 : randomFactor < 0.4;
}

// Function to handle WhatsApp communication
export async function sendWhatsAppFlow(phoneNumber: string, date: string): Promise<void> {
  try {
    // Log this action (in production, you'd send to a real endpoint)
    console.log('WhatsApp Flow request:', { phoneNumber, date });
    
    // Silently log errors as per requirements
    console.error('WhatsApp Flow debug info (normal, not error):', { phoneNumber, date });
    
    // In production, you would make a real API call
    // return await fetch('/api/whatsapp', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ phoneNumber, date }),
    // });
  } catch (err) {
    // Silently log error
    console.error('WhatsApp Flow error:', err);
  }
}
import React from 'react';

interface SectionDividerProps {
  topColor: string;
  bottomColor: string;
  waveFill?: string;
  flipY?: boolean;
  className?: string;
}

export function SectionDivider({
  topColor,
  bottomColor,
  waveFill = "#fbf7e4",
  flipY = false,
  className = "",
}: SectionDividerProps) {
  return (
    <div className={`relative h-16 ${className}`}>
      <div className="absolute inset-0" style={{ backgroundColor: topColor }}></div>
      <div className="absolute bottom-0 w-full h-16" style={{ backgroundColor: bottomColor }}></div>
      
      <svg
        className={`absolute w-full h-16 ${flipY ? 'transform rotate-180' : ''}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: waveFill, opacity: 0.07 }}
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
      </svg>
      
      <svg
        className={`absolute w-full h-16 ${flipY ? 'transform rotate-180' : ''}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: waveFill, opacity: 0.05 }}
      >
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity="0.25"></path>
      </svg>
      
      <svg
        className={`absolute w-full h-16 ${flipY ? 'transform rotate-180' : ''}`}
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        xmlns="http://www.w3.org/2000/svg"
        style={{ fill: waveFill, opacity: 0.03 }}
      >
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
      </svg>
    </div>
  );
} 
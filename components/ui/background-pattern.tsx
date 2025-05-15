"use client";

import React from 'react';

interface BackgroundPatternProps {
  baseColor: string;
  accentColor: string;
  secondaryColor?: string;
  opacity?: number;
  className?: string;
}

export function BackgroundPattern({
  baseColor = "#1C2526",
  accentColor = "#fbf7e4",
  secondaryColor = "#F20505",
  opacity = 0.4,
  className = "",
}: BackgroundPatternProps) {
  return (
    <div className={`absolute inset-0 ${className}`} style={{ opacity }} aria-hidden="true">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern 
            id={`pattern-${baseColor.replace('#', '')}`} 
            width="40" 
            height="40" 
            patternUnits="userSpaceOnUse" 
            patternTransform="rotate(10)"
          >
            <rect width="100%" height="100%" fill={baseColor} />
            <path 
              d="M0 20H40M10 0V40M30 0V40M0 10H40M0 30H40" 
              stroke={accentColor} 
              strokeOpacity="0.15" 
              strokeWidth="0.5"
            />
            <circle cx="10" cy="10" r="2" fill={accentColor} fillOpacity="0.2" />
            <circle cx="30" cy="30" r="2" fill={accentColor} fillOpacity="0.2" />
            <circle cx="30" cy="10" r="1" fill={accentColor} fillOpacity="0.2" />
            <circle cx="10" cy="30" r="1" fill={accentColor} fillOpacity="0.2" />
          </pattern>
          <linearGradient 
            id={`gradient-${baseColor.replace('#', '')}`} 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="100%"
          >
            <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.05" />
            <stop offset="50%" stopColor={baseColor} stopOpacity="0.1" />
            <stop offset="100%" stopColor={accentColor} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill={`url(#pattern-${baseColor.replace('#', '')})`} />
        <rect width="100%" height="100%" fill={`url(#gradient-${baseColor.replace('#', '')})`} />
        
        {/* Абстрактные формы */}
        <circle cx="20" cy="20" r="25" fill={accentColor} fillOpacity="0.03" />
        <circle cx="80" cy="80" r="40" fill={secondaryColor} fillOpacity="0.02" />
        <path d="M0,50 Q50,0 100,50 T0,50" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.08" fill="none" />
        <path d="M0,70 Q50,20 100,70" stroke={accentColor} strokeWidth="0.5" strokeOpacity="0.05" fill="none" />
      </svg>
    </div>
  );
} 
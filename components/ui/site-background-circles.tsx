"use client";

import React from 'react';

export function SiteBackgroundCircles() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 1920 1080" 
        preserveAspectRatio="xMidYMid slice"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Большой круг слева */}
        <circle cx="-200" cy="540" r="500" fill="#ECECEC" fillOpacity="0.7" />
        
        {/* Два круга справа */}
        <circle cx="1920" cy="200" r="180" fill="#ECECEC" fillOpacity="0.5" />
        <circle cx="1920" cy="800" r="120" fill="#ECECEC" fillOpacity="0.4" />
      </svg>
    </div>
  );
} 
import React from "react";

// Custom logo for Icestock Sport Satara District Association
// Designed as a blue & saffron roundel with an ice stock silhouette + "ISSDA" mark underneath
const BrandLogo = ({ className = "w-11 h-11" }) => {
  return (
    <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" aria-label="ISSDA logo">
      {/* Outer ring */}
      <circle cx="32" cy="32" r="30" fill="#143a55" />
      <circle cx="32" cy="32" r="27" fill="#ffffff" />
      {/* Saffron arc top */}
      <path d="M32 5 a27 27 0 0 1 27 27 h-6 a21 21 0 0 0 -21 -21 z" fill="#e79a3b" />
      {/* Blue arc bottom */}
      <path d="M32 59 a27 27 0 0 1 -27 -27 h6 a21 21 0 0 0 21 21 z" fill="#2e8bc0" />
      {/* Icestock silhouette */}
      <g transform="translate(32 31)">
        <rect x="-1.6" y="-16" width="3.2" height="14" rx="1" fill="#143a55" />
        <ellipse cx="0" cy="-1" rx="10" ry="3" fill="#143a55" />
        <path d="M-10 -1 L-10 2 Q-10 5 0 5 Q10 5 10 2 L10 -1 Z" fill="#2e8bc0" />
      </g>
      {/* Mini ice lines */}
      <path d="M14 42 L50 42" stroke="#143a55" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3" opacity="0.6" />
    </svg>
  );
};

export default BrandLogo;

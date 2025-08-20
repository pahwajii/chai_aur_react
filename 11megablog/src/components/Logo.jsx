import React from 'react'

function Logo({width = '100px'}) {
  return (
    <svg width={width} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NebulaPress logo">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#231942"/>
          <stop offset="50%" stopColor="#5E548E"/>
          <stop offset="100%" stopColor="#9F86C0"/>
        </linearGradient>
        <linearGradient id="nebulaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E0B1CB"/>
          <stop offset="50%" stopColor="#BE95C4"/>
          <stop offset="100%" stopColor="#9F86C0"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd">
        {/* Background rectangle with enhanced gradient */}
        <rect x="4" y="8" width="44" height="44" rx="12" fill="url(#logoGradient)" stroke="#E0B1CB" strokeWidth="1"/>
        
        {/* Enhanced nebula design */}
        <path d="M14 40 L28 20 L42 40" stroke="url(#nebulaGradient)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow)"/>
        
        {/* Central star with better visibility */}
        <circle cx="28" cy="28" r="6" fill="#E0B1CB" stroke="#231942" strokeWidth="1.5"/>
        <circle cx="28" cy="28" r="3" fill="#231942"/>
        
        {/* Text with better contrast */}
        <text x="62" y="38" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="20" fontWeight="800" fill="#231942" letterSpacing="0.5">Nebula</text>
        <text x="145" y="38" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="20" fontWeight="800" fill="#9F86C0" letterSpacing="0.5">Press</text>
      </g>
    </svg>
  )
}

export default Logo

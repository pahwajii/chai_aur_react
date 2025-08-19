import React from 'react'

function Logo({width = '100px'}) {
  return (
    <svg width={width} viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NebulaPress logo">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#231942"/>
          <stop offset="50%" stopColor="#5E548E"/>
          <stop offset="100%" stopColor="#9F86C0"/>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <rect x="4" y="8" width="44" height="44" rx="10" fill="url(#g)"/>
        <path d="M14 40 L28 20 L42 40" stroke="#E0B1CB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="28" cy="28" r="5" fill="#BE95C4"/>
        <text x="62" y="38" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="22" fontWeight="700" fill="#231942">Nebula</text>
        <text x="128" y="38" fontFamily="Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial" fontSize="22" fontWeight="700" fill="#9F86C0">Press</text>
      </g>
    </svg>
  )
}

export default Logo

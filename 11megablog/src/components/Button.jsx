import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-primary',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
   <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} shadow-soft transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-lg focus:ring-2 focus:ring-accent focus:outline-none ${className}`} type={type} {...props}>
    {children}
   </button>
  )
}

export default Button

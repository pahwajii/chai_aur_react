import React from 'react'

function Container({children, className = ""}) {
  return <div className={`w-full px-4 lg:px-8 ${className}`}>{children}</div>;
}

export default Container

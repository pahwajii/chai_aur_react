import React from 'react'

function Container({children}) {//children ki jgh kuch bhi rkh skte hai 
    //propertis accept karta hai as a children
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
  
}

export default Container

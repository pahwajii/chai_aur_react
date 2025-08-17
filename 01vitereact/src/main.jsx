import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// function MYapp can also be run like as we run <APP/> 
function Myapp(){
  return (
    <div>
      <h1>custom APP! </h1>
    </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit Google'
// };
// reactelement seedha seedha nahi chlega kyunki ye custom react library hai jo ki hmane bnayi hai uske code bundler ke paas nahi or hamne yahan per anotherElement isliye abhi banayahai yehin per to vo pass kr gya aram se 
const anotheruser="chai bhai"
const reactelement = React.createElement(//by this the elemwnt is injectd by the transpiler (babel)by using react library and using create element //this is the syntax for creating react element
  'a',
  {href:'https://google.com',
    target: '_blank'
  },
  'click me to visit google'
  
)//how a react element should be crreated

const anotherElement = (
    <a href="https://google.com" target = "_blank">visit Google</a>
)
createRoot(document.getElementById('root')).render(
  
    <App/>
  
)


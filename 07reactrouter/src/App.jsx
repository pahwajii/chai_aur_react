import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import Home from './components/HOME/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Footer/>
      <Home/>
    </>
  )
}

export default App

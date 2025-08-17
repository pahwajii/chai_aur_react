import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>

    </>
    // ab kkya hoga outlet se header same rhega or footer same rhega hmesha or inke beech me jo hoga vp change hota rhaega bas yehi kaam hai outlet ka ye bhi rputer ki functionality hai 
    // actually me apko index file me dena padega ki apne layout file banayi hai ki usme pata hai ki apka fiole ka layout kese rhne wala hai to ham index file me change krenge 
  )
}

export default Layout

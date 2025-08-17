import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/HOME/Home.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github  from './components/Github/Github.jsx'
import { githbInfoLoader } from './components/Github/Github.jsx'


// const router= createBrowserRouter([
//   {
//      // The base route (root of your site: '/')
//     path: '/',// path it means / kya hai top levele element iske andar nesting ho rhi hai to fi risliye isse likha ahai ye kya cheez render krega vo element isse batayenge 
    
//     element: <Layout/>,//props hai sab ye path , elements and children is router ke//children isliye banan pada kyunki isme or bhi elements hai 
//     // This is like a wrapper or common layout for all children

//     children:[{
//       // When the URL is exactly '/', show Home component
//       path : "",
//       element: <Home/>

//     },{
//        // When the URL is '/about', show About component
//       path: "about",
//       element :<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     }

//     ]// jitne bhi nesting route krne haiapne karlijiye children array ke through
//   }
// ])

//second way to do routing 
 const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element= {<About/>}/>
      <Route path='contact' element= {<Contact/>}/>
      <Route path= 'user/:userId' element={<User/>}/>
      <Route 
      loader= {githbInfoLoader}
      path= 'github' 
      element={<Github/>}/>
      
    </Route>
    // Use loader hamari help krta hai data ko fetch krne ke liye vo bhi click se phle ye jese hi hamara pointer uspe pahuchta hai ussi smey hi ye shuru krdeta hai apna fetch process jo ki lag remove krta hai or ye saara data fetched store krta hai cache me and we use a specially hook that is useloaderdata hook to connect the loader and the GitHub file for the following
  )
 )
// RENDERING INTO THE DOM
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

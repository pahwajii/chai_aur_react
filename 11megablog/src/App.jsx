
import './App.css'
import React, {  useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authslice"
import { Header, Footer } from './components'

// import index from './components/index.js'


function App() {
  
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getcurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userData}))
        } else{
          dispatch(logout())
        }
      })
      .catch((error)=>{
        console.error("Error fetching user data:", error);
        dispatch(logout()); // Ensure to log out if there's an error
      })
      .finally(()=>setLoading(false))//ye run hoga chahe user login ho ya nahi
  },[])




  if(loading){
    return <div className='loading'>Loading...</div>
  }

  return (
    <div className=" min-h-screen flex flex-wrap content-between bg-gray-500 
     ">
     <div className='w-full block'>
      <Header/>
      <main>
      todo {/*<outlet/>*/}
      </main>
      <Footer/>
     </div>
    </div>
  )
}

export default App

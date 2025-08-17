
import './App.css'
import React, { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authslice"


function App() {
  
  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch();

  useEffect(() => {
    authService.getcurrentUser()
      .then((userData)=>{
        if(userData){
          dispatch(login({userdata: userData}))
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
    <div className=" min-h-sc
     ">
      <h1>Welcome to the App</h1>
      {/* Add your components and routes here */}
    </div>
  )
}

export default App

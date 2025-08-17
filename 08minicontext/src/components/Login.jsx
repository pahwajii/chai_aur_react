import React,{useState,useContext} from 'react'
import UserContext from '../Context/UserContent'

function Login() {
    const[username,setusername]= useState('')
    const[password,setpassword]= useState('')

// ab value fetch kese krenge ham uske liye ham use krenge usecontext
    const{setUser}=useContext(UserContext)


    const handleSubmit = (e)=> {
        e.preventDefault()
        setUser({username,password})
    }


  return (
    <div>
      <h2>Login</h2>
      <input type = 'text' 
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder='username'/>
      { "      "}
      {/* //value govern krne ke liye value={username}
      onChange={(e)=>setusername(e.target.value)}
      placeholder='username' */}
      <input type = 'text' 
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      placeholder='password'/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login

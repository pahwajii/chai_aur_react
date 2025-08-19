// mechanism hai ek ye jisse ye sab login signin u protect hots ghai to ham ye ek protected container banate hai

import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'



function Protected({ children, authentication = true })
 {
    
    const navigate = useNavigate()
    const [loader ,setLoader]=useState(true)
    const authStatus = useSelector(state => state.auth.status)//store se puchnege authstatus kya hia uske liye ham use krte hai useselector jisse hame auth,status pata lag jayega 

    // useEffect hi mujhe btayega ki kahan bhejna hai mujhe login ya signup per 
    useEffect(()=>{
        //todo ==> make it more easy 
        // if(authstatus === true){
        //     navigate("/")
        // } else if (authStatus === false){
        //     navigate("/login")
        // }



        // let authValue = authStatus ===true ? true :false


        if(authentication && authStatus!== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false)

    },[authStatus,navigate,authentication])


  return loader ? <h1>Loading</h1> : <>{children}</>;

}

export default Protected

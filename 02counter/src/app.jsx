import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'

export function App() {

  const [counter,setcounter]=useState(5) // here it declares counter as a variable itself it can be of any name depending on what u wann use in useState so here counter is only a function 
  //setcounter is a method jo ki control karega counter ko yaani iss variable ko jo tum likhoge usse phle this updates all the places where counter is used 
  //setcounter is the function responsible to change the counter 
  const min_limit = 0
  const max_limit = 20

 // let counter = 5
  const addValue = ()=> {
    // counter +=1
    if(counter<max_limit){
    setcounter(counter+1)}
    // ya fir counter = counter+1
    //and then write the updated value of counter in setcounter(counter)
    
  }
  const removeValue = ()=>{
    if(counter>min_limit){
    setcounter(counter-1)}
  }
  


  return (
    <>
      <h1>CHAI AUR REACT</h1>
      <h2>counter Value : {counter}</h2>

      <button onClick={addValue}>add value{counter}</button>
      <br/>
      <button onClick={removeValue}>remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

import { useCallback, useEffect, useState,useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numallowed, setnumallowed] = useState(false)
  const [chrallowed, setcharallowed] = useState(false)
  const [password, setpassword] = useState("")
  //ref hook
  const passwordRef = useRef(null)
// usecallback (()=>{fn,dependencies array})-> cache me rkhta hai jab jab iski dependencies me change hota hai 
  const passwordgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numallowed) str += "0123456789"
    if (chrallowed) str += "!@#$%^&*()_+{}[]"

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * str.length)
      pass += str[randomIndex]
    }

    setpassword(pass)
  }, [length, numallowed, chrallowed,setpassword])
// useeffect(()=>{},dependencies arry)-> it runs the code again when the dependies are changed 
  useEffect(() => {
    passwordgenerator()
  }, [length, numallowed, chrallowed, passwordgenerator])
// react pe ho to window likh paa rhe ho vrna next.js me nahi likh paoge kyunki window object nahi hota server pe run hota hai saara yehi reason hai

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select() 
    passwordRef.current?.setSelectionRange(0, 5) // For mobile devices select range from the password generated
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
  }, [password])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-52 text-orange-600 bg-gray-700'>
        <h1 className='text-white text-center my-2'>
          PASSWORD GENERATOR
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden mb-5'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 my-4'
            placeholder='password'
            readOnly
            ref={passwordRef}  // Attach the ref to the input
          />
          <button
            onClick={copyToClipboard}
            className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0 my-4'
          >
            Copy
          </button>
        </div>

        <div className='flex flex-col gap-y-3 text-sm text-white my-4'>
          <div className='flex items-center gap-x-2'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => setlength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              checked={numallowed}
              onChange={() => setnumallowed(prev => !prev)}
              id="numberCheck"
            />
            <label htmlFor="numberCheck">Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              checked={chrallowed}
              onChange={() => setcharallowed(prev => !prev)}
              id="charCheck"
            />
            <label htmlFor="charCheck">Include Special Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

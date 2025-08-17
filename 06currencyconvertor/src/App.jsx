import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { InputBox } from './components'
import usecurrencyInfo from './hooks/usecurrencyinfo'

function App() {
  
  const[amount,setAmount] = useState(0)
  const[from,setfrom]= useState("USD")
  const[to,setTo]= useState("INR")
  const[convertedamt,setconvertedamt]=useState(0)

  const currencyInfo = usecurrencyInfo(from)

  //we get all th keys from the api 
  const options = Object.keys(currencyInfo)

  const swap=() => {
    setfrom(to)
    setTo(from)
    setconvertedamt(amount)
    setAmount(convertedamt)
  }

  const convert = ()=> {
    setconvertedamt(amount*currencyInfo[to])
  }

  return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/164661/pexels-photo-164661.jpeg')`,
            }}

        >
            <div className="w-1/2 h-full flex items-center justify-center">
            <img 
            src="https://images.pexels.com/photos/33104714/pexels-photo-33104714.jpeg"
            alt="Chai time"
            className="max-h-[70%] rounded-lg shadow-lg"
            />
            </div>
            <div className="w-1/2">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyoptions={options}
                                onCurrencyChange={(currency)=> setAmount(amount)}//jisse ki vhn pe luch change ho to yhn pe reflect ho jaye
                                selectCurrency={from}
                                onAmountChange={(amount)=> setAmount(amount)}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedamt}
                                currencyoptions={options}
                                onCurrencyChange={(currency)=> setTo(currency)}//jisse ki vhn pe luch change ho to yhn pe reflect ho jaye
                                selectCurrency={to}
                                amountdisable//true pass krna 
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App

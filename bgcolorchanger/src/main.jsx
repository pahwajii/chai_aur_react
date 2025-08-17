import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 {/* <div
      ref={wrapperRef}
      className="min-h-screen flex flex-col items-center justify-center gap-6 text-center p-8 transition-all duration-300"
    >
      <h1 className="text-5xl font-bold text-gray-800">BACKGROUND COLOR CHANGER</h1>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <button onClick={() => changeColor('red')} className="bg-red-500 text-white px-4 py-2 rounded">Red</button>
        <button onClick={() => changeColor('green')} className="bg-green-500 text-white px-4 py-2 rounded">Green</button>
        <button onClick={() => changeColor('blue')} className="bg-blue-500 text-white px-4 py-2 rounded">Blue</button>
        <button onClick={() => changeColor('yellow')} className="bg-yellow-300 text-black px-4 py-2 rounded">Yellow</button>
        <button onClick={() => changeColor('white')} className="bg-gray-200 text-black px-4 py-2 rounded">Reset</button>
        <button
  onClick={() => {
    const randomColor = generateRandomHexColor();
    wrapperRef.current.style.backgroundColor = randomColor;
  }}
  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
>
  Random
</button>

      </div>

      <button onClick={shakeEffect} className="mt-6 text-xl bg-amber-300 px-6 py-2 rounded shadow">
        Shake
      </button>
    </div> */}
    // const wrapperRef = useRef();

//   const changeColor = (color) => {
//     wrapperRef.current.style.backgroundColor = color;
//   };

//   const shakeEffect = () => {
//     const el = wrapperRef.current;
//     el.classList.add('shake');
//     setTimeout(() => el.classList.remove('shake'), 500);
//   };
//   const generateRandomHexColor = () => {
//   const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
//   return randomColor;

// };

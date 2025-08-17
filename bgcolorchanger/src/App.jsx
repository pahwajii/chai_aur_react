import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div
      className="w-full h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 gap-3 shadow-lg bg-white rounded-2xl py-4">
        <button
          onClick={() => setColor('red')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{ backgroundColor: 'red' }}
        >
          RED
        </button>
        <button
          onClick={() => setColor('green')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{ backgroundColor: 'green' }}
        >
          GREEN
        </button>
        <button
          onClick={() => setColor('blue')}
          className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
          style={{ backgroundColor: 'blue' }}
        >
          BLUE
        </button>
        <button
          onClick={() => setColor('yellow')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
          style={{ backgroundColor: 'yellow' }}
        >
          YELLOW
        </button>
        <button
          onClick={() => setColor('white')}
          className="outline-none px-4 py-1 rounded-full text-black shadow-xl border"
          style={{ backgroundColor: 'white' }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import { Themecontext } from './context/Theme'; // Assuming this is your context file
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => setThemeMode('light');
  const darkTheme = () => setThemeMode('dark');

  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.remove('light', 'dark');
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <Themecontext.Provider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className='p-4 bg-pink-700 text-3xl'>chai</h1>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themecontext.Provider>
  );
}

export default App;

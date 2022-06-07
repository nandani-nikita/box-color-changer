import { useState } from 'react';
import Box from './Box';
import Input from './Input'
import './App.css';

function App() {
  const [color, setColor] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className='App'>
      <Box
        color={color}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        color={color}
        setColor={setColor}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;

import { useState } from 'react';
import Box from './Box';
import Input from './Input'
import './App.css';

function App() {
  const [color, setColor] = useState('');

  const handleColorChange = (color) => {
    setColor(color);
  }
  return (
    <div className='App'>
      <Box color={color} />
      <Input
        color={color}
        handleColorChange={handleColorChange} />
    </div>
  );
}

export default App;

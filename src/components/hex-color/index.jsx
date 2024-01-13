import { useEffect, useState } from 'react';

export default function RandomColor() {
  const [colorType, setColorType] = useState('hex');
  const [color, setColor] = useState('#000000');

  function randomColorUtil(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHEXColor() {
    //  #678765
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtil(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRGBColor() {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (colorType === 'rgb') {
      handleCreateRandomRGBColor();
    } else handleCreateRandomHEXColor();
  }, [colorType]);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
    >
      <button onClick={() => setColorType('hex')}>Create HEX Color</button>
      <button onClick={() => setColorType('rgb')}>Create RGB Color</button>
      <button
        onClick={
          colorType === 'hex'
            ? handleCreateRandomHEXColor
            : handleCreateRandomRGBColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontSize: '60px',
          marginTop: '50px',
          flexDirection: 'column',
          gap: '5px',
        }}
      >
        <h3>{colorType === 'rgb' ? 'RGB Color' : 'HEX Color'}:</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

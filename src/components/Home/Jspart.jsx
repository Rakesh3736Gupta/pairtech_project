import React, { useState } from 'react';

function Jspart() {
  const [fontSize, setFontSize] = useState('16px');
  const [color, setColor] = useState('black');

  const handleClick = () => {
    setFontSize('25px');
    setColor('red');
  };

  return (
    <div className="flex justify-around items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">JavaScript</h1>
        <p className="text-lg mb-8">The language for programming web pages</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.location.href = 'https://www.w3schools.com/js/default.asp'}>Learn JavaScript</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" onClick={() => window.location.href = 'https://www.w3schools.com/js/js_ref_all.asp'}>JavaScript Reference</button>
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">Get Certified</button>
      </div>
      <div className="w-1/3 p-8 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">JavaScript Example:</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" onClick={handleClick}>Click Me!</button>
        <p id="demo" className={`text-${color} font-${fontSize}`}>This is a paragraph.</p>
      </div>
    </div>
  );
}

export default Jspart;

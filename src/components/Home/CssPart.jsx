import React from 'react';

const CssPart = () => {
  return (
    <div className="bg-yellow-200 min-h-screen flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
        {/* Left Column */}
        <div className="md:w-1/2 mb-6 md:mb-0 p-4 lg:p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">CSS</h1>
          <p className="text-md sm:text-lg mb-6 text-center md:text-left">The language for styling web pages</p>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Learn CSS</button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">CSS Reference</button>
            <button className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Get Certified</button>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 p-4 lg:p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">CSS Example:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-left">
            <code>
              {`body {
  background-color: lightblue;
}
h1 {
  color: white;
  text-align: center;
}
p {
  font-family: verdana;
}`}
            </code>
          </pre>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4">Try it Yourself</button>
        </div>
      </div>
    </div>
  );
}

export default CssPart;

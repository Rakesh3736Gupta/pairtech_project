import React from 'react';

function JavaScript() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full flex flex-col md:flex-row md:space-x-6 lg:space-x-8">
        {/* Left Column */}
        <div className="md:w-1/2 mb-6 md:mb-0 p-4 lg:p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left text-gray-900">JavaScript</h1>
          <p className="text-md sm:text-lg mb-6 text-center md:text-left text-gray-900">The language for programming web pages</p>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Learn JavaScript</button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">JavaScript Reference</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Get Certified</button>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 p-4 lg:p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-gray-900">JavaScript Example:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-900 overflow-x-auto text-left">
            <code>
              &lt;button onclick="myFunction()"&gt;Click Me!&lt;/button&gt;
              <br />
              &lt;script&gt;
              <br />
              function myFunction() &#123;
              <br />
              &nbsp;&nbsp;let x = document.getElementById("demo");
              <br />
              &nbsp;&nbsp;x.style.fontSize = "25px";
              <br />
              &nbsp;&nbsp;x.style.color = "red";
              <br />
              &#125;
              <br />
              &lt;/script&gt;
            </code>
          </pre>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4">Try it Yourself</button>
        </div>
      </div>
    </div>
  );
}

export default JavaScript;

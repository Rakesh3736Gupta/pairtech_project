// import React from 'react';

// const Python = () => {
//   return (
//     <><div className="container mx-auto p-8">
//       <div className="flex flex-col md:flex-row md:items-center">
//         <div className="md:w-1/2">
//           <div className="flex flex-col items-center">
//             <h1 className="text-5xl font-bold mb-4">Python</h1>
//             <p className="text-lg mb-8">A popular programming language</p>
//             <div className="flex flex-col space-y-4">
//               <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Learn Python</button>
//               <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">Python Reference</button>
//               <button className="bg-pink-300 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded">Get Certified</button>
//             </div>
//           </div>
//         </div>

//         <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
//           <div className="bg-gray-200 p-8 rounded shadow">
//             <h2 className="text-2xl font-bold mb-4">Python Example:</h2>
//             <pre className="bg-gray-100 p-4 rounded">
//               <code>
//                 <span className="text-blue-500">if </span>5 <span className="text-red-500">&gt;</span> 2:
//                 <br />
//                 <span className="text-red-500">print</span>("Five is greater than two!")
//               </code>
//             </pre>
//           </div>
//           <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8">Try it Yourself</button>
//         </div>
//       </div>
//     </div>
//     {/* <div>
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         <div className="bg-pink-200 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">PHP</h2>
//           <p className="text-gray-700">A web server programming language</p>
//           <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Learn PHP
//           </button>
//         </div>
//         <div className="bg-yellow-200 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">jQuery</h2>
//           <p className="text-gray-700">A JS library for developing web pages</p>
//           <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Learn jQuery
//           </button>
//         </div>
//         <div className="bg-gray-100 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">Java</h2>
//           <p className="text-gray-700">A programming language</p>
//           <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Learn Java
//           </button>
//         </div>
//         <div className="bg-green-100 p-8 rounded-lg shadow-md">
//           <h2 className="text-2xl font-bold text-gray-900 mb-4">C++</h2>
//           <p className="text-gray-700">A programming language</p>
//           <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//             Learn C++
//           </button>
//         </div>
//       </div>
//     </div>
//     </div> */}
//     </>
    

    
//   );
// };

// export default Python;

import React from 'react';

const Python = () => {
  return (
    <div className="bg-gray-400 text-white min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full flex flex-col md:flex-row md:space-x-6 lg:space-x-8">
        {/* Left Column */}
        <div className="md:w-1/2 mb-6 md:mb-0 p-4 lg:p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left text-gray-900">Python</h1>
          <p className="text-md sm:text-lg mb-6 text-center md:text-left text-gray-900">A popular programming language</p>
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Learn Python</button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Python Reference</button>
            <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline">Get Certified</button>
          </div>
        </div>
        {/* Right Column */}
        <div className="md:w-1/2 p-4 lg:p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left text-gray-900">Python Example:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg text-gray-900 overflow-x-auto text-left">
            <code>
              <span className="text-blue-500">if </span>5 <span className="text-red-500">&gt;</span> 2:
              <br />
              &nbsp;&nbsp;<span className="text-red-500">print</span>("Five is greater than two!")
            </code>
          </pre>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline mt-4">Try it Yourself</button>
        </div>
      </div>
    </div>
  );
};

export default Python;

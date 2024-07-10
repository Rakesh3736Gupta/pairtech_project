import React from 'react';

const HtmlPart = () => {
  return (
    <div className="bg-green-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl w-full flex flex-col lg:flex-row lg:space-x-8">
        {/* Left Column */}
        <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">HTML</h1>
          <p className="text-lg text-gray-700 mb-8">The language for building web pages</p>
          <div className="flex flex-col items-center lg:items-start space-y-4 mb-8">
            <button className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition">
              Learn HTML
            </button>
            <button className="bg-yellow-300 text-gray-900 py-2 px-6 rounded-full hover:bg-yellow-400 transition">
              Video Tutorial
            </button>
            <button className="bg-gray-800 text-white py-2 px-6 rounded-full hover:bg-gray-900 transition">
              HTML Reference
            </button>
            <button className="bg-pink-400 text-white py-2 px-6 rounded-full hover:bg-pink-500 transition">
              Get Certified
            </button>
          </div>
        </div>
        {/* Right Column */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-inner lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-4">HTML Example:</h2>
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-left">
            <code className="text-gray-800">
              &lt;!DOCTYPE html&gt;
              <br />
              &lt;html&gt;
              <br />
              &lt;head&gt;
              <br />
              &lt;title&gt;HTML Tutorial&lt;/title&gt;
              <br />
              &lt;/head&gt;
              <br />
              &lt;body&gt;
              <br />
              &lt;h1&gt;This is a heading&lt;/h1&gt;
              <br />
              &lt;p&gt;This is a paragraph.&lt;/p&gt;
              <br />
              &lt;/body&gt;
              <br />
              &lt;/html&gt;
            </code>
          </pre>
          <button className="bg-green-600 text-white mt-4 py-2 px-4 rounded-full hover:bg-green-700 transition">
            Try it Yourself
          </button>
        </div>
      </div>
    </div>
  );
}

export default HtmlPart;

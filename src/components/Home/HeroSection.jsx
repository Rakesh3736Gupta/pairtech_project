import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className="bg-[#10313d] text-white min-h-screen flex flex-col items-center justify-center px-4 lg:px-0">
        <div className="text-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Learn to Code</h1>
          <p className="text-base sm:text-lg md:text-xl text-yellow-300">
            With the world's largest web developer site.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-md sm:max-w-lg lg:max-w-xl space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="text"
              placeholder="Search our tutorials, e.g., HTML"
              className="w-full sm:w-auto flex-grow p-2 text-gray-800 rounded-full outline-none"
            />
            <button className="bg-green-600 text-white p-2 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 15.232a6 6 0 111.768-1.768l5.536 5.536-1.768 1.768-5.536-5.536z"
                />
              </svg>
            </button>
          </div>
          <a
            href="#"
            className="text-base sm:text-lg md:text-xl text-gray-200 hover:underline"
          >
            Not Sure Where To Begin?
          </a>
        </div>
        <img
          src="path-to-astronaut-image.png"
          alt="Astronaut"
          className="w-24 sm:w-32 md:w-40 absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8"
        />
      </div>
    </>
  );
};

export default HeroSection;

// import React from 'react';

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        {/* Decorative SVG Icon */}
        <div className="flex justify-center mb-6 animate-bounce">
          <svg
            className="w-40 h-40 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Headings */}
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight sm:text-8xl">
          404
        </h1>
        <h2 className="mt-2 text-2xl font-bold text-gray-800 tracking-tight sm:text-3xl">
          Oops! Page not found
        </h2>
        
        {/* Description */}
        <p className="mt-4 text-base text-gray-600 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-200"
          >
            {/* Optional SVG Home Icon */}
            <svg 
              className="w-5 h-5 mr-2 -ml-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v11a1 1 0 001 1h3m10-11v11a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
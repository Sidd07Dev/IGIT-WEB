// components/LogoLoader.jsx
import React from 'react';


const LogoLoader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="relative">
        {/* Spinning logo */}
        <img
          src="../public/icon.png"
          alt="Loading..."
          className="w-24 h-24  duration-[3000ms] ease-linear drop-shadow-xl brightness-110"
        />

        {/* Glowing pulse ring */}
        <div className="absolute inset-0 rounded-full border-4 border-indigo-400 border-dashed animate-ping" />
      </div>

      {/* Loading text */}
      <p className="mt-4 text-lg font-medium text-gray-600 dark:text-gray-300 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default LogoLoader;

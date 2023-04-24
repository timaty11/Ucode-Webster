import React from 'react';


const DevsSocials = () => {
  return (
    <div className="flex-grow flex flex-wrap md:pr-210 -mb-20 md:text-left text-center order-first ">
      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-dark-text-400 ">Developed</h2>
        <nav className="list-none mb-10">
          <li><a className="text-gray-600 hover:text-gray-800 dark:text-dark-text-300">@VATNIK</a></li>
          <li><a className="text-gray-600 hover:text-gray-800 dark:text-dark-text-300">@koza_mudaza</a></li>
          <li><a className="text-gray-600 hover:text-gray-800 dark:text-dark-text-300">@bananolllll</a></li>
        </nav>
      </div>

      <div className="w-full px-4 lg:w-1/4 md:w-1/2">
        <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 dark:text-dark-text-400">Github.com</h2>
        <nav className="list-none mb-10">
          <li><a href="https://github.com/Fyri1" className="text-gray-600 hover:text-gray-800 dark:text-dark-text-300 dark:hover:text-dark-text-400 ">Fyri</a></li>
          <li><a href="https://github.com/Herman2201" className="text-gray-600 hover:text-gray-800 dark:text-dark-text-300 dark:hover:text-dark-text-400">Herman2201</a></li>
          <li><a href="https://github.com/timaty11" className="text-gray-600 hover:text-gray-800 dark:text-dark-text-300 dark:hover:text-dark-text-400">timaty11</a></li>
        </nav>
      </div>
    </div>
  );
}

export default DevsSocials;

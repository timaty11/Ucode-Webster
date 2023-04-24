import React from 'react';


const DarkModeSwitch = () => {
  const toggleSwitchHandle = (e) => {
    if (localStorage.getItem('color-theme')) {  // if set via local storage previously
      if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      }
    } else {  // if NOT set via local storage previously
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
      }
    }
  }

  return (
    <div className="items-center dark:bg-gray-900">
      <div className="flex justify-between toggle h-10 w-56 overflow-hidden bg-white text-lg dark:bg-dark-bg-800">
        <label className="flex items-center" htmlFor="dark-toggle">
          <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <div className="px-7 text-gray-900 font-medium dark:text-dark-text-400">Dark mode</div>

          <div className="relative cursor-pointer">
            <input onChange={toggleSwitchHandle} defaultChecked={localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)} className="sr-only peer" type="checkbox" name="dark-mode" id="dark-toggle" />
            <div className="block border-[1px] border-gray-900 w-11 h-6 rounded-full hover:shadow dark:border2-dark-text-400" />
            <div className="dot absolute left-1 top-1 bg-gray-800 w-4 h-4 rounded-full transition-all peer peer-checked:after:translate-x-full peer-checked:left-6 peer-checked:transition-all dark:bg-gray-300" />
          </div>
        </label>
      </div>
    </div>
  )
}

export default DarkModeSwitch;



import React from 'react';


const CheckboxInputField = ({ id, data, setData }) => {
  return (
    <div className="flex p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <span className="ml-3 pr-10 text-sm font-medium text-gray-900 dark:text-gray-300">{ id }</span>
      <label className="relative inline-flex items-center w-full cursor-pointer">
        <input id={id} type="checkbox" value="" className="sr-only peer" onChange={(e) => {
          setData({
            ...data,
            [id]: e.target.checked,
          });
        }}></input>
        <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
};

export default CheckboxInputField;

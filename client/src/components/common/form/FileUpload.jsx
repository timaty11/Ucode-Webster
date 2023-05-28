import React from "react";


const FileUpload = ({ id, name, placeholder, children }) => {
  return (
    <div className="px-6">
      <label htmlFor="file" className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">{name}</label>
      <div className="relative">
        <input className="block w-full text-sm text-gray-900 border border-gray-700 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file"></input>
      </div>
    </div>
  )
}

export default FileUpload;

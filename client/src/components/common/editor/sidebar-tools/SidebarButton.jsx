import React from "react";

const SidebarButton = ({ clickHandle, icon, id }) => {
  return (
    <li id={id} className="flex gap-4 items-center p-4 cursor-pointer group flex text-left relative h-12 w-full items-center overflow-hidden bg-white text-2xl shadow dark:bg-dark-bg-800 dark:text-dark-text-400" onClick={clickHandle}>
      <div className="absolute inset-0 w-1 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full dark:bg-dark-bg-700"></div>
      <i className={`bx ${icon} px-1 relative text-black group-hover:text-white dark:text-dark-text-400`}></i>
    </li>
  )
}

export default SidebarButton;

import React from "react";


const DropdownElement = ({ name, path }) => {
  return (
    <a ref={path} className="group text-left relative h-10 w-full overflow-hidden bg-white text-lg shadow">
      <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
      <span className="px-7 relative text-black group-hover:text-white">{ name }</span>
    </a>
  );
}

export default DropdownElement;

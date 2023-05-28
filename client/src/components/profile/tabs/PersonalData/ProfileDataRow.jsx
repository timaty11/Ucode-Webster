import React from "react";


const ProfileDataRow = ({ id, name, value }) => {  
  return (
    <li className="flex border-b pt-6 pb-4 dark:border-gray-700">
      <div className="flex w-full dark:text-dark-text-400">
        <span className="font-bold w-[35%]">{ name }</span>
        <span className="text-gray-700 w-[65%] pl-3 dark:text-dark-text-300">{ value }</span>
      </div>
    </li>
  );
}

export default ProfileDataRow;

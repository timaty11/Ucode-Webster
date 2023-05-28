import React from "react";

import InputField from '../../../common/form/InputField.jsx';


const ProfileDataInputRow = ({ id, name, value, data, setData, errors, setErrors }) => {
  // console.log(data);
  return (
    <li className="flex border-b pt-4 pb-1 dark:border-gray-700">
      <div className="flex w-full dark:text-dark-text-400">
        <span className="font-bold pt-2 w-[35%] pr-1">{ name }</span>
        <div className="w-[65%]">
          <InputField id={id} name={value} type="text" data={data} setData={setData} errors={errors} setErrors={setErrors}>
            <div className="absolute inset-y-0 left-0 flex items-center pl-1 pointer-events-none">
              <svg className="w-5 h-3 text-gray-500 dark:text-gray-100" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
              </svg>
            </div>
          </InputField>
        </div>
      </div>
    </li>
  );
}

export default ProfileDataInputRow;

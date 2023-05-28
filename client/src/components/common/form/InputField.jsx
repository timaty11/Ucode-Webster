import React from 'react';

import ToastWarning from '../toast/ToastWarning.jsx';


const InputField = ({ id, name, type, min, data, setData, errors, setErrors, setType, children }) => {  
  React.useEffect(() => {
    const errorElement = document.getElementById("error-" + id);
    const classList = errorElement.classList;

    if (errors[id]) {      
      classList.forEach((element, i) => {
        if (element === "invisible") {
          console.log("remove invisible govno");
          errorElement.classList.remove("invisible");
          errorElement.classList.remove("opacity-0");
          errorElement.classList.add("visible");
          errorElement.classList.add("opacity-100");
        }
      });
    } else {
      classList.forEach((element, i) => {
        if (element === "visible") {
          console.log("remove visible govno");
          errorElement.classList.remove("visible");
          errorElement.classList.remove("opacity-100");
          errorElement.classList.add("invisible");
          errorElement.classList.add("opacity-0");
        }
      });
    }
  }, [errors]);

  const inputChangeHandle = (e) => {
    e.preventDefault();

    setData({
      ...data,
      [id]: e.target.value,
    });

    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: '',
      });
    }
  };

  return (
    <div className="w-full px-[5%]">
      <div data-popover-target={"error-" + id} data-popover-placement="right" data-popover-trigger="none" className="relative z-0 w-full mb-1 group">
        { children }
        <input onChange={inputChangeHandle} type={type} min={min} name="floating_email" id={id} className="block py-2.5 px-7 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " value={data[id]}/>
        <label htmlFor="floating_email" className="px-10 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-95 peer-focus:-translate-y-6 peer-focus:-translate-x-8">{name}</label>
      </div>
      <div data-popover id={"error-" + id} role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
        <ToastWarning id={"toast-warning-" + id} message={"Oops! " + errors[id]} errorDescription={errors[id]} />
      </div>
    </div>
  );
};

export default InputField;

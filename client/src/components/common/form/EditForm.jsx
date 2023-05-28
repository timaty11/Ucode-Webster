import React from 'react';

const AuthForm = ({ formMessage, children }) => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen ">
      <div className="w-full bg-transparent md:mt-0 sm:max-w-md">
        <div className="p-6 space-y-4 md:space-y-6 ">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-dark-bg-800 dark:border-dark-bg-700">
            <div className="p-6 space-y-4 md:space-y-6">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">{ formMessage }</h1>
              <div className="space-y-4 md:space-y-4" >
                { children }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;

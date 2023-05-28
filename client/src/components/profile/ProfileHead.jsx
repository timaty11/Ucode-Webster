import React from 'react';

import Spinner from '../common/Spinner.jsx';

import apiClientRoutes from '../../routes/api/apiClientRoutes.js';
import default_avatar from '../../temp/avatar.png';


const ProfileHead = ({ userData }) => {
  console.log(userData)
  return !userData ? <Spinner /> : (
    <div className="bg-white rounded-lg shadow-xl pb-8 dark:bg-dark-bg-800">
      <div className="w-full h-[250px]">
        <img src="https://vojislavd.com/ta-template-demo/assets/img/profile-background.jpg" className="w-full h-full rounded-tl-lg rounded-tr-lg"></img>
      </div>

      <div className="flex flex-col items-center -mt-20">
        <img src={userData.values['picture'] ? apiClientRoutes.getPathAvatar(userData.values['picture']) : default_avatar} className="w-40 border-4 border-white rounded-full dark:bg-dark-bg-900 dark:border-dark-bg-900"></img>
        <div className="flex items-center space-x-2 mt-2">
          <p className="text-2xl dark:text-dark-text-100">
            { 
              userData.values?.first_name && userData.values.last_name ? userData.values.first_name + " " + userData.values.last_name :
              userData.values.email
            }
          </p>
          <span className="bg-blue-500 rounded-full p-1" title="Verified">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
            </svg>
          </span>
        </div>

      </div>


    </div>
  )
}

export default ProfileHead;

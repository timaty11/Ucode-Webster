import React from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import DarkModeSwitch from './DarkModeSwitch.jsx';

import clientRoutes from '../../../routes/client/clientRoutes.js';
import apiClientRoutes from '../../../routes/api/apiClientRoutes.js';
import UserContext from '../../../context/UserContext.js';

import defaultAvarat from '../../../temp/avatar.png';
import $api from '../../../../utils/api.js';


export default () => {
  // const [t, i18n] = useTranslation(['header', 'auth']);
  const navigate = useNavigate();

  const { currentUser } = React.useContext(UserContext);

  const fullName = `Hi, ${!localStorage.getItem('token') ? "Guest" : (!currentUser?.name ? currentUser.login : currentUser.name)}`
  const logoutButtonHandle = async (e) => {
    e.preventDefault();
    try {
      const response = await $api.post(apiClientRoutes.logoutPath());
      console.log(response);
      localStorage.removeItem('token');
      location.href = '/';
    } catch (err) {
      console.log(err);
      navigate('/404');
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left dark:bg-dark-bg-800 z-10">
      <div>
        <Menu.Button className="flex items-center w-full py-2 text-sm font-medium text-gray-700 bg-blue-600 dark:bg-dark-bg-800">
          <img className="mr-2 w-8 h-8 rounded-full" src={currentUser['picture'] ? apiClientRoutes.getPathAvatar(currentUser['picture']) : defaultAvarat} alt="user photo" />
        </Menu.Button>
      </div>

      <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
        <Menu.Items className="dark:bg-dark-800 absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <div className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
              <span className="px-7 relative text-black dark:text-dark-text-400">{fullName}</span>
            </div>
          </Menu.Item>

          <Menu.Item>
            {
              localStorage.getItem('token') ? (
                <button onClick={() => location.href = clientRoutes.profilePagePath()} className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
                  <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="px-7 relative text-black group-hover:text-white dark:text-dark-text-400">{ "Profile" }</span>
                </button>
              ) : (
                <div className="flex">
                  <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>

                  <button onClick={() => location.href = clientRoutes.loginPagePath()} className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
                    <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="px-7 relative text-black group-hover:text-white dark:text-dark-text-400">{ "Sign in" }</span>
                  </button>

                  <button onClick={() => location.href = clientRoutes.registerPagePath()} className="group flex text-left relative h-10 w-full items-center overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800 dark:text-dark-text-400">
                    <div className="absolute inset-0 w-0 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="px-7 relative text-black group-hover:text-white dark:text-dark-text-400">{ "Sign up" }</span>
                  </button>
                </div>
              )
            }
            
          </Menu.Item>

          <Menu.Item>
            <DarkModeSwitch />
          </Menu.Item>

          { localStorage.getItem('token') ?
            <form onSubmit={logoutButtonHandle}>
              <Menu.Item>
                {({ active }) => (
                  <button className="group text-left relative h-10 w-56 overflow-hidden bg-white text-lg shadow dark:bg-dark-bg-800">
                    <div className="absolute inset-0 w-2 bg-blue-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="px-7 relative text-black group-hover:text-white dark:text-dark-text-400">Logout</span>
                  </button>
                )}
              </Menu.Item>
            </form> : <></>
          }
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

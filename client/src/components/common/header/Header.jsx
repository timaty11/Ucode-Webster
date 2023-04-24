import React from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '../Logo.jsx';
import Navbar from './Navbar.jsx';
import UserDropdownMenu from './UserDropdownMenu.jsx';
import LanguageSelectMenu from './LanguageSelectMenu.jsx';

import clientRoutes from '../../../routes/client/clientRoutes.js';
import '../../css/header.css';


const lngs = {
  en: { nativeName: 'en' },
  ru: { nativeName: 'ru' },
  ua: { nativeName: 'ua' },
};

const Header = () => {
  const [ t, i18n ] = useTranslation('header');

  return (
    <header className="pb-10">
      <nav className="fixed z-50 w-full bg-blue-600 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-dark-bg-800">
        <div className="flex flex-wrap justify-between items-center w-full mx-auto container">
          <Logo />
          <Navbar />
          
          <div className="flex lg:order-1 items-center justify-end w-[10%] ">
            <LanguageSelectMenu />
            <UserDropdownMenu />

            <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-dark-text-400 dark:hover:bg-dark-bg-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React from "react";
import { useTranslation } from 'react-i18next';

import NavbarElement from "./NavbarElement.jsx";

import clientRoutes from '../../../routes/client/clientRoutes.js';
import UserContext from '../../../context/UserContext.js';


const Navbar = () => {
  // const [ t, i18n ] = useTranslation('header');

  // const { currentUser } = React.useContext(UserContext);
  // const isOrganization = currentUser.role === 'organization';

  
  return (
    <div className="hidden items-center justify-center lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
        {/* <NavbarElement name={t('navButtons.mainPage')} path={clientRoutes.mainPagePath()}/>
        <NavbarElement name={t('navButtons.about')} path={clientRoutes.aboutUsPagePath()}/>
        <NavbarElement name={t('navButtons.contact')} path={clientRoutes.contactInfoPagePath()}/> */}
        <NavbarElement name={'cal'} path={clientRoutes.mainPagePath()}/>
        <NavbarElement name={'sasi'} path={clientRoutes.aboutUsPagePath()}/>
        <NavbarElement name={'zopy'} path={clientRoutes.contactInfoPagePath()}/>
      </ul>
    </div>
  );
}

export default Navbar;

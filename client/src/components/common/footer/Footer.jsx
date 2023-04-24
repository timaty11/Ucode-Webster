import React from "react";

import Logo from "../Logo.jsx";
import DevsSocials from "./DevsSocials.jsx";
import WebsiteSocials from "./WebsiteSocials.jsx";


const Footer = () => {
  return (
    <footer className="flex-[0_0_auto] bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-00  dark:bg-dark-bg-800  dark:from-gray-800  dark:via-[#343b40]   ">
      <div className="container md:px-6 md:py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col  ">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
          <Logo />
          <p className="mt-2 -ml-10 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
        </div>
        
        <DevsSocials />
      </div>

      <WebsiteSocials />
    </footer>
  );
}

export default Footer;

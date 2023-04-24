import React from 'react';

const NavbarElement = ({ name, path }) => {
  return (
    <li>
      <a href={path} className="block py-2 pr-4 pl-3 text-gray-300 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-300 lg:p-0 dark:text-dark-text-400 lg:dark:hover:text-dark-text-600 lg:dark:hover:bg-transparent " aria-current="page">{ name }</a>
    </li>
  );
}

export default NavbarElement;

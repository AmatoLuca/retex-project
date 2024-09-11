import React from 'react';
import NavToggleButton from './NavToggleButton';
import NavSearch from './NavSearch';
import './NavMenu.scss';

const NavMenu = ({ handleMenuClick, isMenuOpened }) => {
  return (
    <div className="nav-menu">
      <NavToggleButton
        handleMenuClick={handleMenuClick}
        isMenuOpened={isMenuOpened}
      />
      <NavSearch />
    </div>
  );
};

export default NavMenu;

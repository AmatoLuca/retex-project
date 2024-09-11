import React from 'react';
import NavToggleButton from './NavToggleButton';
import NavSearch from './NavSearch';
import NavMainMenu from './NavMainMenu';
import './NavMenu.scss';

const NavMenu = ({ handleMenuClick, isMenuOpened }) => {
  return (
    <div className="nav-menu">
      <NavToggleButton
        handleMenuClick={handleMenuClick}
        isMenuOpened={isMenuOpened}
      />
      <NavSearch />

      {isMenuOpened && <NavMainMenu />}
    </div>
  );
};

export default NavMenu;

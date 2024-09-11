import React, { useState, useCallback } from 'react';
import NavToggleButton from './NavToggleButton';
import NavSearch from './NavSearch';
import NavMainMenu from './NavMainMenu';
import './NavMenu.scss';

const NavMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpened((prev) => setIsMenuOpened(!prev));
  }, []);

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

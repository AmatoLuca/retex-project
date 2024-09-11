import React, { useState, useCallback, useEffect } from 'react';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import NavMainMenu from './NavMainMenu';
import './Navigator.scss';

const Navigator = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handleMenuClick = useCallback(() => {
    setIsMenuOpened((prev) => setIsMenuOpened(!prev));
  }, []);

  return (
    <div className="nav">
      <div className="nav__row">
        <NavLinks />
      </div>
      <div className="nav__row nav__row-actions">
        <NavMenu
          handleMenuClick={handleMenuClick}
          isMenuOpened={isMenuOpened}
        />
      </div>
      {isMenuOpened && <NavMainMenu />}
    </div>
  );
};

export default Navigator;

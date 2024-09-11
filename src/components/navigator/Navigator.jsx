import React, { useState, useCallback, useEffect } from 'react';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import NavMainMenu from './NavMainMenu';
import Navbar from './Navbar';
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

      <div className="nav__row">
        <NavMenu
          handleMenuClick={handleMenuClick}
          isMenuOpened={isMenuOpened}
        />
      </div>

      <div className="nav__row">
        <Navbar />
      </div>
    </div>
  );
};

export default Navigator;

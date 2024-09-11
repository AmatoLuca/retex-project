import React, { useEffect } from 'react';
import hamburgerIcon from '../../assets/images/IconHamburger.svg';
import closeIcon from '../../assets/images/closeIcon.svg';
import './NavToggleButton.scss';

const NavToggleButton = ({ handleMenuClick, isMenuOpened }) => {
  return (
    <div className="nav-toggle-wrapper">
      <div className="nav-toggle-icon-wrapper" onClick={handleMenuClick}>
        {isMenuOpened ? (
          <a href="#">
            <img src={closeIcon} alt="close-icon" />
          </a>
        ) : (
          <a href="#">
            <img src={hamburgerIcon} alt="hamburger-icon" />
          </a>
        )}
      </div>
    </div>
  );
};

export default NavToggleButton;

import React from 'react';
import hamburgerIcon from '../../assets/images/IconHamburger.svg';
import './NavToggleButton.scss';

const NavToggleButton = () => {
  return (
    <div className="nav-toggle-wrapper">
      <div className="nav-toggle-icon-wrapper">
        <a href="#">
          <img src={hamburgerIcon} alt="hamburger-icon" />
        </a>
      </div>
    </div>
  );
};

export default NavToggleButton;

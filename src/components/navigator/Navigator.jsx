import React from 'react';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import './Navigator.scss';

const Navigator = () => {
  return (
    <div className="nav">
      <div className="nav__row nav__row-ghost"></div>
      <div className="nav__row">
        <NavLinks />
      </div>
      <div className="nav__row nav__row-actions">
        <NavMenu />
      </div>
    </div>
  );
};

export default Navigator;

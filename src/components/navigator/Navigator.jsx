import React from 'react';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';
import Navbar from './Navbar';
import './Navigator.scss';

const Navigator = () => {
  return (
    <div className="nav">
      <div className="nav__row">
        <NavLinks />
      </div>

      <div className="nav__row">
        <NavMenu />
      </div>

      <div className="nav__row">
        <Navbar />
      </div>
    </div>
  );
};

export default Navigator;

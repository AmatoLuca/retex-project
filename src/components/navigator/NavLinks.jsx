import React from 'react';
import iconUser from '../../assets/images/logUser.svg';
import './NavLinks.scss';

const NavLinks = () => {
  return (
    <div className="nav-links-wrapper">
      <div className="nav-links-general">
        <div className="nav-link">
          <a href="#">Contribuisci</a>
        </div>
        <div className="nav-link">
          <a href="#">Abbonati</a>
        </div>
      </div>

      <div className="nav-links-log">
        <div className="nav-link-icon">
          <img src={iconUser} alt="icon-user" />
        </div>
        <div className="nav-link">Accedi</div>
      </div>
    </div>
  );
};

export default NavLinks;

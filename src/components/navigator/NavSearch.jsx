import React from 'react';
import searchIcon from '../../assets/images/IconLens.svg';
import './NavSearch.scss';

const NavSearch = () => {
  return (
    <div className="nav-search-wrapper">
      <div className="nav-search-icon-wrapper">
        <a href="#">
          <img src={searchIcon} alt="search-icon" />
        </a>
      </div>
    </div>
  );
};

export default NavSearch;

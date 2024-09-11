import React from 'react';
import './MenuItemComplex.scss';

const MenuItemComplex = ({ mainTitle, subTitle }) => {
  return (
    <div className="nav-menu-item">
      <div className="nav-menu-item-inner">
        <div className="main-title">{mainTitle}</div>
        <div className="sub-title">{subTitle}</div>
      </div>
    </div>
  );
};

export default MenuItemComplex;

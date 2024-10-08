import React, { useCallback, useState } from 'react';
import './Navbar.scss';
import iconLand from '../../assets/images/Iconland.svg';
import iconLetter from '../../assets/images/Iconaa.svg';
import { linkData } from '../../utils/linkData';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleClick = useCallback((id) => {
    setActiveLink(id);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar__inner">
        <ul>
          {linkData.map((link) => (
            <li
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={activeLink === link.id ? 'active' : ''}
            >
              <a href="#">{link.nome}</a>
            </li>
          ))}
        </ul>

        <div className="icons">
          <div className="icons-wr">
            <img src={iconLetter} alt="icon-letter" />
          </div>
          <div className="icons-wr icons-wr-border">
            <img src={iconLand} alt="icon-land icon-land-border" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

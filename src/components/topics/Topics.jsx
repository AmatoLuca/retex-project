import React from 'react';
import { linkData } from '../../utils/linkData';
import './Topics.scss';

const Topics = ({ title }) => {
  return (
    <div className="topic-wrapper">
      <div className="title-wrapper">{title}</div>
      <div className="topics-list">
        <ul>
          {linkData.map((link) => (
            <a href="#">
              <li className="topic-item" key={link.id}>
                {link.nome}
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topics;

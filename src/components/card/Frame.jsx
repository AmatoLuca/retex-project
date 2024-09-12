import React from 'react';
import './Frame.scss';

const Frame = ({ image }) => {
  return (
    <div className="frame-wrapper">
      <img src={image} alt="frame-card" />
    </div>
  );
};

export default Frame;

import React from 'react';
import './AvatarDetails.scss';

const AvatarDetails = ({ imageAuthor, name, date, icon }) => {
  return (
    <div className="avatar-wrapper">
      <div className="avatar-image-wrapper">
        <img src={imageAuthor} alt="author-avatar" />
      </div>
      <div className="avatar-name">{name}</div>
      <div className="avatar-date">{date}</div>
      <div className="avatat-icon">
        <img src={icon} alt="arrow-icon" />
      </div>
    </div>
  );
};

export default AvatarDetails;

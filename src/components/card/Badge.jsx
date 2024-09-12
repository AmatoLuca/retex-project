import React from 'react';
import './Badge.scss';

const Badge = ({ title, color }) => {
  return (
    <div className="badge-wrapper" style={{ backgroundColor: color }}>
      {title}
    </div>
  );
};

export default Badge;

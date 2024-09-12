import React from 'react';
import './Typography.scss';

const Typography = ({ title, isStretched }) => {
  return (
    <div
      className={`typography-wrapper ${
        isStretched ? 'typography-wrapper-stretch' : ''
      }`}
    >
      {title}
    </div>
  );
};

export default Typography;

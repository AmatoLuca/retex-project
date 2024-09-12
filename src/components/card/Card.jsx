import React from 'react';
import Badge from './Badge';
import Typography from './Typography';
import './Card.scss';

const Card = ({ cardData }) => {
  return (
    <div className="card-wrapper" style={{ background: cardData.background }}>
      <Badge title={cardData.badge.text} color={cardData.badge.color} />
      <Typography title={cardData.title} />
    </div>
  );
};

export default Card;

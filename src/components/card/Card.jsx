import React from 'react';
import Badge from './Badge';
import Typography from './Typography';
import Frame from './Frame';
import AvatarDetails from './AvatarDetails';
import './Card.scss';

const Card = ({ cardData }) => {
  const isColorized = cardData.background.isColorized;
  const isFrame = cardData.frame;
  const isCardExpanded = cardData.format === 'large';

  return (
    <div
      className={`card-wrapper ${isCardExpanded && 'card-wrapper-expanded'}`}
      style={
        isColorized
          ? { background: cardData.background.ground }
          : {
              backgroundImage: `url(${cardData.background.ground})`,
              backgroundSize: 'cover',
            }
      }
    >
      <div className="card-info-wrapper">
        <Badge title={cardData.badge.text} color={cardData.badge.color} />
        {isFrame && <Frame image={cardData.frame} />}
        <Typography title={cardData.title} isStretched={isFrame} />
      </div>

      <div className="card-avatar-wrapper">
        <AvatarDetails
          imageAuthor={cardData.author.avatar}
          name={cardData.author.name}
          date={cardData.author.date}
          icon={cardData.author.icon}
        />
      </div>
    </div>
  );
};

export default Card;

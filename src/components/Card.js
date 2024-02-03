import React from 'react';
import './Card.css';

const Card = ({ player }) => {
  const rarityClass = player.rarity.toLowerCase(); // Assuming rarity is in lowercase

  return (
    <div className={`card ${rarityClass}`}>
      <div className="inner-border">
        <div className="avg-power-overlay">{player.avgPower}</div>
        <img src="sample_image.jpg" alt={`${player.playerName} Card`} className="card-img" />
      </div>
      <div>
        <p className="card-title">{player.playerName}</p>
        <p className="card-stats">{`Team: ${player.team}`}</p>
        {/* Add more card details as needed */}
      </div>
    </div>
  );
};

export default Card;

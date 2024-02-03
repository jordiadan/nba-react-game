// Card.js
import React from 'react';

const cardStyles = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  width: '200px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  padding: '8px',
  backgroundColor: '#f8f8f8',
};

const imageStyles = {
  width: '100%',
  borderRadius: '4px',
  marginBottom: '8px',
};

const titleStyles = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '4px',
};

const statsStyles = {
  fontSize: '14px',
  color: '#555',
};

const Card = ({ player }) => {
  return (
    <div style={cardStyles}>
      <img src={player.image} alt={`${player.playerName} Card`} style={imageStyles} />
      <div>
        <p style={titleStyles}>{player.playerName}</p>
        <p style={statsStyles}>{`Avg Power: ${player.avgPower}`}</p>
        <p style={statsStyles}>{`Team: ${player.team}`}</p>
        {/* Add more card details as needed */}
      </div>
    </div>
  );
};

export default Card;

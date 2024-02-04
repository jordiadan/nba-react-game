// Card.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders Card component with sample data', () => {
  const samplePlayer = {
    playerName: 'John Doe',
    team: 'Sample Team',
    rarity: 'Legendary',
    image: 'sample_image.jpg',
    avgPower: 90,
  };

  render(<Card player={samplePlayer} />);

  // Check if the rarity class is applied to the card
  const cardElement = document.getElementsByClassName('legendary')[0];
  expect(cardElement).toBeInTheDocument();

  // Check if the average power overlay is present
  const avgPowerOverlay = screen.getByText('90');
  expect(avgPowerOverlay).toBeInTheDocument();
});

import React from 'react';
import { render, screen, act } from '@testing-library/react';
import CardCollectionView from './CardCollectionView';
import fetchCardData from '../api/CardsApi';

// Mock the module
jest.mock('../api/CardsApi');

describe('CardCollectionView component', () => {
  test('renders card collection', async () => {
    // Create a promise that resolves with the mock data
    const mockData = [
      {
        id: 1,
        playerName: 'Mock Player',
        team: 'Mock Team',
        rarity: 'Mock Rarity',
        image: 'mock_image.jpg',
        avgPower: 88,
        stats: { points: 20, rebounds: 8, assists: 4, steals: 1 },
      },
      // Add more mock data as needed
    ];

    fetchCardData.mockResolvedValueOnce(mockData);

    await act(async () => {
      render(<CardCollectionView />);
    });

    // Your assertions and test logic here
    expect(screen.getByText('Card Collection')).toBeInTheDocument();
    expect(screen.getByText('All Cards')).toBeInTheDocument();
    // Add more assertions as needed
  });
});

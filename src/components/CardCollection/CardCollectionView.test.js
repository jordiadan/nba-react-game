import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import CardCollectionView from '../CardCollection/CardCollectionView';
import fetchCardData from '../../api/CardsApi';

// Mock the module
jest.mock('../../api/CardsApi');

describe('CardCollectionView component', () => {
  const mockData = [
    {
      id: 1,
      playerName: 'LeBron James',
      team: 'Los Angeles Lakers',
      rarity: 'Epic',
      image: 'lebron_james.jpg',
      avgPower: 95,
      stats: { points: 30, rebounds: 10, assists: 8, steals: 2 },
    },
  ];

  beforeEach(() => {
    // Reset the mock implementation before each test
    fetchCardData.mockResolvedValueOnce(mockData);
  });

  test('renders card collection with default filters', async () => {
    await act(async () => {
      render(<CardCollectionView />);
    });

    expect(screen.getByText('Card Collection')).toBeInTheDocument();
    expect(screen.getByText('All Cards')).toBeInTheDocument();
    expect(screen.getByText('LeBron James')).toBeInTheDocument();
    // Add more assertions as needed
  });

  test('applies filters and renders filtered cards', async () => {
    await act(async () => {
      render(<CardCollectionView />);
    });

    // Apply filters
    fireEvent.change(screen.getByLabelText('Player Name:'), { target: { value: 'LeBron' } });
    fireEvent.change(screen.getByLabelText('Rarity:'), { target: { value: 'Epic' } });
    fireEvent.change(screen.getByLabelText('Team:'), { target: { value: 'Los Angeles Lakers' } });

    expect(screen.getByText('LeBron James')).toBeInTheDocument();
    // Ensure other cards are not rendered
    expect(screen.queryByText('Stephen Curry')).toBeNull();
  });

});

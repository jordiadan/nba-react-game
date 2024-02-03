// CardCollectionView.js
import React, { useState } from 'react';

const CardCollectionView = () => {
  // Dummy data for illustration purposes
  const cardData = [
    { id: 1, playerName: 'Player 1', team: 'Team A', rarity: 'Common' },
    { id: 2, playerName: 'Player 2', team: 'Team B', rarity: 'Rare' },
    // Add more card data as needed
  ];

  const [playerNameFilter, setPlayerNameFilter] = useState('');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');

  const filteredCards = cardData.filter((card) =>
    card.playerName.toLowerCase().includes(playerNameFilter.toLowerCase()) &&
    (rarityFilter === 'All' || card.rarity === rarityFilter) &&
    (teamFilter === 'All' || card.team === teamFilter)
  );

  // Get unique rarities and teams for dropdown options
  const uniqueRarities = [...new Set(cardData.map((card) => card.rarity))];
  const uniqueTeams = [...new Set(cardData.map((card) => card.team))];

  return (
    <div className="card-collection-container">
      <header>
        <h2>Card Collection</h2>
      </header>
      <main>
        <section className="filters">
          <div>
            <label htmlFor="playerNameFilter">Filter by Player Name:</label>
            <input
              type="text"
              id="playerNameFilter"
              value={playerNameFilter}
              onChange={(e) => setPlayerNameFilter(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="rarityFilter">Filter by Rarity:</label>
            <select
              id="rarityFilter"
              value={rarityFilter}
              onChange={(e) => setRarityFilter(e.target.value)}
            >
              <option value="All">All</option>
              {uniqueRarities.map((rarity) => (
                <option key={rarity} value={rarity}>
                  {rarity}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="teamFilter">Filter by Team:</label>
            <select
              id="teamFilter"
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
            >
              <option value="All">All</option>
              {uniqueTeams.map((team) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className="sorting-options">
          <h3>Sorting Options</h3>
          {/* Add sorting option components (e.g., dropdowns, buttons) */}
        </section>

        <section className="card-list">
          <h3>All Cards</h3>
          <ul>
            {filteredCards.map((card) => (
              <li key={card.id}>
                <div>
                  <p>{`Player: ${card.playerName}`}</p>
                  <p>{`Team: ${card.team}`}</p>
                  <p>{`Rarity: ${card.rarity}`}</p>
                  {/* Add more card details as needed */}
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default CardCollectionView;

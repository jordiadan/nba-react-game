import React, { useState, useEffect } from 'react';
import fetchCardData from '../../api/CardsApi';
import Card from '../Card/Card';
import './CardCollectionView.css';

const CardCollectionView = () => {
  const [cardData, setCardData] = useState([]);
  const [playerNameFilter, setPlayerNameFilter] = useState('');
  const [rarityFilter, setRarityFilter] = useState('All');
  const [teamFilter, setTeamFilter] = useState('All');

  useEffect(() => {
    fetchCardData().then((data) => {
      setCardData(data);
    }).catch((error) => {
      console.error("Error fetching card data:", error);
    });
  }, []);

  const filteredCards = cardData.filter((card) =>
    card.playerName.toLowerCase().includes(playerNameFilter.toLowerCase()) &&
    (rarityFilter === 'All' || card.rarity === rarityFilter) &&
    (teamFilter === 'All' || card.team === teamFilter)
  );

  const uniqueRarities = [...new Set(cardData.map((card) => card.rarity))];
  const uniqueTeams = [...new Set(cardData.map((card) => card.team))];

  return (
    <div className="card-collection-container">
      <header>
        <h2>Card Collection</h2>
      </header>
      <main>
        <section className="filters">
          <label>
            Player Name:
            <input
              type="text"
              value={playerNameFilter}
              onChange={(e) => setPlayerNameFilter(e.target.value)}
            />
          </label>
          <label>
            Rarity:
            <select
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
          </label>
          <label>
            Team:
            <select
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
          </label>
        </section>

        <section className="card-list">
          <h3>All Cards</h3>
          <div className="card-grid">
            {filteredCards.map((card) => (
              <Card key={card.id} player={card} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default CardCollectionView;

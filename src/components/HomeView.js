import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation

const HomeView = () => {
  return (
    <div className="home-container">
      <header>
        <h1>NBA Card Gacha Game</h1>
      </header>
      <main>
        <section className="featured-content">
          <h2>Featured Content</h2>
          {/* Display featured cards, events, or promotions */}
          {/* Add any relevant images or animations */}
        </section>

        <section className="announcements">
          <h2>Announcements</h2>
          {/* Display the latest announcements with brief descriptions */}
          {/* Provide links for users to explore more details */}
        </section>
      </main>

      <footer>
        <nav className="quick-access">
          <h2>Quick Access</h2>
          <ul>
            <li>
              <Link to="/collection">Card Collection</Link>
            </li>
            <li>
              <Link to="/pack-opening">Card Pack Opening</Link>
            </li>
            <li>
              <Link to="/team-building">Team Building</Link>
            </li>
            {/* Add links for other main views */}
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default HomeView;

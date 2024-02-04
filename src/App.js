// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './components/Home/HomeView';
import CardCollectionView from './components/CardCollection/CardCollectionView'; // Import the new component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/collection" element={<CardCollectionView />} /> {/* Add route for CardCollectionView */}
        {/* Add routes for other main views */}
      </Routes>
    </Router>
  );
};

export default App;

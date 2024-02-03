// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Update the import
import HomeView from './components/HomeView';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        {/* Add routes for other main views */}
      </Routes>
    </Router>
  );
};

export default App;

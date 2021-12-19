import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import UserScreen from './pages/UserScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:id" element={<UserScreen />} />
      </Routes>
    </Router>
  );
}

export default App;

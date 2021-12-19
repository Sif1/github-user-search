import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import UserScreen from './pages/UserScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/:id" element={<UserScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

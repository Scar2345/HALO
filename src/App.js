import React, { useState, useEffect } from 'react';
import GameManager from './components/GameManager';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Interactive Synesthesia Game</h1>
      <GameManager />
    </div>
  );
}

export default App;

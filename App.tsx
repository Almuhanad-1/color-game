import * as React from 'react';
import { Router, Route, Routes } from 'react-router-dom';
import Game from './components/game/Game';
import GameWithTimer from './components/game/GameWithTimer';
import Train from './components/game/Train';
import Homepage from './components/homepage/Homepage';
import LeaderBoard from './components/leaderBoard/LeaderBoard';

import './app.css';
import NewApp from './NewApp';

export default function App() {
  return (
    <div className="app">
      {/* <NewApp /> */}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/play" element={<Game />} />
        <Route path="/playWithTimer" element={<GameWithTimer />} />
        <Route path="/train" element={<Train />} />
        {/* <LeaderBoard /> */}
        {/* <Game /> */}
      </Routes>
    </div>
  );
}

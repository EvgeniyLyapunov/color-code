import React from "react";
import { useState } from "react";

import StartView from '../modules/start-view/StartView';
import GameView from "../modules/game-view/GameView";
// import FinishView from "../modules/finish-view/FinishView";

import './app.scss';

function App() {
  const [gameStage, setGameStage] = useState('start');

  const gamePlay = (currentStage) => {
    setGameStage(currentStage);
  }

  function setCurrentView() {
    switch(gameStage) {
      case 'start':
        return <StartView gamePlay={gamePlay}/>;
      case 'game':
        return <GameView gamePlay={gamePlay}/>
      case 'finish':
        return null;
      default:
        return null;
    }
  }

  const currentView = setCurrentView();

  return (
    <div className="app">
      {currentView}
    </div>
  );
}

export default App;

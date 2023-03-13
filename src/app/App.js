import React from "react";
import { useState } from "react";

import StartView from '../modules/start-view/StartView';
import IntroView from "../modules/intro-view/IntroView";
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
      case 'intro':
        return <IntroView gamePlay={gamePlay}/>
      case 'game':
        return null;
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

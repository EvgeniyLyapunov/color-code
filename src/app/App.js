import React from 'react';
import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';

import StartView from '../modules/start-view/StartView';

import Loading from './components/loading/Loading';

import './app.scss';

const IntroView = lazy(() => import('../modules/intro-view/IntroView'));
const GameView = lazy(() => import('../modules/game-view/GameView'));
const FinishView = lazy(() => import('../modules/finish-view/FinishView'));

function App() {
  const currentStage = useSelector((state) => state.globalReducer.gameStage);

  function setCurrentView() {
    switch (currentStage) {
      case 'start':
        return <StartView />;
      case 'intro':
        return <IntroView />;
      case 'game':
        return <GameView />;
      case 'finish':
        return <FinishView />;
      default:
        return null;
    }
  }

  const currentView = setCurrentView();

  return (
    <div className='app'>
      <Suspense fallback={<Loading />}>{currentView}</Suspense>
    </div>
  );
}

export default App;

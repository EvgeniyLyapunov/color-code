import {useState, useEffect} from 'react';

import Square from './components/square';

import './game-view.scss';

const GameView = () => {
  const showTime = 500;

  return(
    <div className='game-view'>
      <Square showTime={showTime * 0}/>
      <Square showTime={showTime * 1}/>
      <Square showTime={showTime * 2}/>
      <Square showTime={showTime * 3}/>
    </div>
  )
}

export default GameView;
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import ConfirmBtn from './components/confirm-btn/ConfirmBtn';
import UserCodeField from './components/user-code-field/UserCodeField';
import Palitra from './components/palitra/Palitra';

import './game-view.scss';

const GameView = () => {
  // флаг для включения плавного появления элементов
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 50);
    // eslint-disable-next-line
  }, []);

  const bgGame = useSelector((state) => state.globalReducer.bgGame);

  const gameViewClass = classNames({
    'game-view': true,
    [`game-${bgGame}`]: true,
  });

  return (
    <div className={gameViewClass}>
      <UserCodeField show={show} />
      <ConfirmBtn show={show} />
      <Palitra />
    </div>
  );
};

export default GameView;

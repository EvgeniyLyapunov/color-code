import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import ConfirmBtn from './components/confirm-btn/ConfirmBtn';
import Counter from './components/counter/Counter';
import UserCodeField from './components/user-code-field/UserCodeField';
import Palitra from './components/palitra/Palitra';
import VictoryMessage from './components/victory-message/VictoryMessage';
import LoserMessage from './components/loser-message/LoserMessage';
import FieldOfMoves from './components/field-of-moves/FieldOfMoves';
import isUserCodeReady from '../../utils/isUserCodeReady';

import { isCodeReady } from '../../redux/slices/gameSlice';

import './game-view.scss';

const GameView = () => {
  const dispatch = useDispatch();
  const userCode = useSelector((state) => state.gameReducer.usersVariantCode);
  const isCurrentReady = useSelector((state) => state.gameReducer.isCodeReady);
  // флаг для включения плавного появления элементов
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(!show);
    }, 50);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const isReady = isUserCodeReady(userCode);
    if ((isReady && !isCurrentReady) || (!isReady && isCurrentReady)) {
      dispatch(isCodeReady());
    }
    // eslint-disable-next-line
  }, [userCode]);

  const bgGame = useSelector((state) => state.globalReducer.bgGame);

  const gameViewClass = classNames({
    'game-view': true,
    [`game-${bgGame}`]: true,
  });

  return (
    <div className={gameViewClass}>
      <FieldOfMoves />
      <UserCodeField show={show} />
      <ConfirmBtn show={show} />
      <Counter show={show} />
      <Palitra />
      <VictoryMessage />
      <LoserMessage />
    </div>
  );
};

export default GameView;

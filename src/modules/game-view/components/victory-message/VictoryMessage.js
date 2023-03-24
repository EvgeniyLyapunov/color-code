import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import UserMove from '../users-move/UsersMove';
import Answer from '../answer/Answer';
import { gameStage, bgFinishWin } from '../../../../redux/slices/globalSlice';

import './victory-message.scss';

const VictoryMessage = () => {
  const bgGame = useSelector((state) => state.globalReducer.bgGame);
  const victory = useSelector((state) => state.gameReducer.isWin);
  const moves = useSelector((state) => state.gameReducer.usersMoves);
  const answers = useSelector(
    (state) => state.gameReducer.responsesToUserMoves
  );
  const winSpeech = useSelector((state) => state.gameReducer.winSpeech);

  const [userMoveComponent, setUserMoveComponent] = useState(null);
  const [answerComponent, setAnswerComponent] = useState(null);

  const [showVictory, setShowVictory] = useState(false);
  useEffect(() => {
    if (moves[moves.length - 1] != null) {
      setUserMoveComponent(<UserMove userCode={moves[moves.length - 1]} />);
      setAnswerComponent(<Answer answer={answers[answers.length - 1]} />);
      setTimeout(() => {
        setShowVictory((showVictory) => (showVictory = !showVictory));
      }, 1000);
      dispatch(bgFinishWin());
    }
    // eslint-disable-next-line
  }, [victory]);

  // флаг анимации нажатия кнопки 'Дальше'
  const [pressNext, setPressNext] = useState(false);
  const dispatch = useDispatch();

  const onPressNext = () => {
    // анимация нажатия кнопки 'Дальше'
    setPressNext((pressNext) => (pressNext = !pressNext));

    setTimeout(() => {
      // анимация отжатия кнопки 'Дальше'
      setPressNext((pressNext) => (pressNext = !pressNext));

      // действия после завершения анимации отжатия кнопки 'Дальше'
      setTimeout(() => {
        dispatch(gameStage('finish'));
      }, 400);
    }, 400);
  };

  const nextBtnStyle = classNames({
    'victory-message__btn-next': true,
    'victory-message__btn-next_press': pressNext,
  });

  const victoryMessageStyle = classNames({
    'victory-message': true,
    [`victory-message_${bgGame}`]: true,
    'victory-message_display': showVictory,
    'victory-message_opacity': showVictory,
  });

  const wordsOfVictory = useMemo(
    () =>
      winSpeech[Math.floor(Math.random() * (winSpeech.length - 1 + 1)) + 1 - 1],
    // eslint-disable-next-line
    []
  );

  return (
    <div className={victoryMessageStyle}>
      <span className='victory-message__words'>{wordsOfVictory}</span>
      {answerComponent}
      {userMoveComponent}
      <button className={nextBtnStyle} onClick={onPressNext}>
        Дальше
      </button>
    </div>
  );
};

export default VictoryMessage;

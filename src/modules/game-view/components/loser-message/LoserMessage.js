import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { gameStage } from '../../../../redux/slices/globalSlice';
import { startBtnEffect } from '../../../../redux/slices/startSlise';
import { newGame } from '../../../../redux/slices/gameSlice';

import './loser-message.scss';

const LoserMessage = () => {
  const bgGame = useSelector((state) => state.globalReducer.bgGame);
  const lose = useSelector((state) => state.gameReducer.isLose);

  const [showLoserMessage, setShowLoserMessage] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowLoserMessage(
        (showLoserMessage) => (showLoserMessage = !showLoserMessage)
      );
    }, 1000);
  }, [lose]);

  const loserMessageStyle = classNames({
    'loser-message': true,
    [`loser-message_${bgGame}`]: true,
    'loser-message_display': showLoserMessage,
    'loser-message_opacity': showLoserMessage,
  });

  // флаг анимации нажатия кнопки 'Дальше'
  const [pressClose, setPressClose] = useState(false);
  const dispatch = useDispatch();

  const onPressClose = () => {
    // анимация нажатия кнопки 'Закрыть'
    setPressClose((pressClose) => (pressClose = !pressClose));

    setTimeout(() => {
      // анимация отжатия кнопки 'Закрыть'
      setPressClose((pressClose) => (pressClose = !pressClose));

      // действия после завершения анимации отжатия кнопки 'Закрыть'
      setTimeout(() => {
        dispatch(newGame());
        dispatch(startBtnEffect());
        dispatch(gameStage('start'));
      }, 400);
    }, 400);
  };

  const closeBtnStyle = classNames({
    'loser-message__btn-close': true,
    'loser-message__btn-close_press': pressClose,
  });

  return (
    <div className={loserMessageStyle}>
      <span className='loser-message__words'>Game over</span>
      <button className={closeBtnStyle} onClick={onPressClose}>
        Закрыть
      </button>
    </div>
  );
};

export default LoserMessage;

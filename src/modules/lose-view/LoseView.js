import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { gameStage } from '../../redux/slices/globalSlice';
import { startBtnEffect } from '../../redux/slices/startSlise';
import { newGame } from '../../redux/slices/gameSlice';

import './lose-view.scss';

const LoseView = () => {
  const dispatch = useDispatch();
  const bgGame = useSelector((state) => state.globalReducer.bgGame);

  const loseMessageStyle = classNames({
    'lose-view': true,
    [`lose-view_${bgGame}`]: true,
  });

  // флаг анимации нажатия кнопки 'Дальше'
  const [pressClose, setPressClose] = useState(false);

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
    'lose-view__btn-close': true,
    'lose-view__btn-close_press': pressClose,
  });

  return (
    <div className={loseMessageStyle}>
      <span className='lose-view__words'>Game over</span>
      <button className={closeBtnStyle} onClick={onPressClose}>
        Закрыть
      </button>
    </div>
  );
};

export default LoseView;

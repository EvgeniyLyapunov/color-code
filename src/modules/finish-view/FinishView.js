import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { gameStage } from '../../redux/slices/globalSlice';
import { startBtnEffect } from '../../redux/slices/startSlise';
import { isWin, newGame } from '../../redux/slices/gameSlice';

import './finish-view.scss';

const FinishView = () => {
  const bg = useSelector((state) => state.globalReducer.bgFinishWin);

  const finishViewStyle = classNames({
    'finish-view': true,
    [`finish-view${bg}`]: true,
  });

  // флаг анимации нажатия кнопки 'Закрыть'
  const [pressClose, setPressClose] = useState(false);
  const dispatch = useDispatch();

  const onPressClose = () => {
    // анимация нажатия кнопки 'Закрыть'
    setPressClose((pressClose) => (pressClose = !pressClose));

    setTimeout(() => {
      // анимация отжатия кнопки 'Закрыть'
      setPressClose((pressClose) => (pressClose = !pressClose));

      // действия после завершения анимации отжатия кнопки 'Дальше'
      setTimeout(() => {
        dispatch(isWin());
        dispatch(newGame());
        dispatch(startBtnEffect());
        dispatch(gameStage('start'));
      }, 400);
    }, 400);
  };

  const closeBtnStyle = classNames({
    'finish-view__close-btn': true,
    'finish-view__close-btn_press': pressClose,
  });

  return (
    <div className={finishViewStyle}>
      <button className={closeBtnStyle} onClick={onPressClose}>
        Закрыть
      </button>
    </div>
  );
};

export default FinishView;

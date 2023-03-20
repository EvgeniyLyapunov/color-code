import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import {
  gameStage,
  bgGame,
  secretCode,
} from '../../../../redux/slices/globalSlice';
import { startBtnEffect } from '../../../../redux/slices/startSlise';

import './btn-start.scss';

const BtnStart = ({ show }) => {
  const btnPressed = useSelector((state) => state.startReducer.startBtnEffect);
  const dispatch = useDispatch();
  const btnStyle = classNames({
    'btn-start': true,
    'btn-start_visibility': show,
    'btn-start_opacity': show,
    'btn-start_pressed': btnPressed,
  });

  const onStartGame = () => {
    // эффект нажатия кнопки (белый box-shadow)
    dispatch(startBtnEffect());
    // выбор фоновой картинки для игры
    dispatch(bgGame());
    // генерация секретного кода
    dispatch(secretCode());
    // переключение на следующий модуль - этап игры - Intro
    setTimeout(() => {
      dispatch(gameStage('intro'));
    }, 600);
  };

  return (
    <button className={btnStyle} onClick={onStartGame} disabled={btnPressed}>
      Старт
    </button>
  );
};

export default BtnStart;

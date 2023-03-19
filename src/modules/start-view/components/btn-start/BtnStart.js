import classNames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { gameStage, bgGame } from '../../../../redux/slices/globalSlice';
import { startBtnEffect } from '../../../../redux/slices/startSlise';

import './btn-start.scss';

const BtnStart = ({ show }) => {
  const btnPressed = useSelector((state) => state.startReducer.startBtnEffect);
  const dispatch = useDispatch();
  const btnClass = classNames({
    'btn-start': true,
    'btn-start_visibility': show,
    'btn-start_opacity': show,
    'btn-start_pressed': btnPressed,
  });

  const onStartGame = () => {
    dispatch(startBtnEffect());
    dispatch(bgGame());
    setTimeout(() => {
      dispatch(gameStage('intro'));
    }, 600);
  };

  return (
    <button className={btnClass} onClick={onStartGame} disabled={btnPressed}>
      Старт
    </button>
  );
};

export default BtnStart;

import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { gameStage, startBtnEffect, bgGame } from "../../../../redux/actions";

import "./btn-start.scss";

const BtnStart = ({ show }) => {
  const btnPressed = useSelector((state) => state.startBtnEffect);
  const dispatch = useDispatch();
  const btnClass = classNames({
    "btn-start": true,
    "btn-start_visibility": show,
    "btn-start_opacity": show,
    "btn-start_pressed": btnPressed,
  });

  const onStartGame = () => {
    dispatch(startBtnEffect());
    dispatch(bgGame());
    setTimeout(() => {
      dispatch(gameStage("intro"));
    }, 600);
  };

  return (
    <button className={btnClass} onClick={onStartGame} disabled={btnPressed}>
      Старт
    </button>
  );
};

export default BtnStart;

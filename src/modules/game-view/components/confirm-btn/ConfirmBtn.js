import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import {
  usersMoves,
  responsesToUserMoves,
  isWin,
  isLose,
  lifePower,
} from '../../../../redux/slices/gameSlice';
import clearUserCodeField from '../../../../utils/clearUserCodeField';
import generateAnswer from '../../../../utils/generateAnswer';
import checkForVictory from '../../../../utils/checkForVictory';

import './confirm-btn.scss';

const ConfirmBtn = ({ show }) => {
  const dispatch = useDispatch();
  const isAlive = useSelector((state) => state.gameReducer.lifePower);
  const secretCode = useSelector((state) => state.globalReducer.secretCode);
  const currentUserCode = useSelector(
    (state) => state.gameReducer.usersVariantCode
  );
  // флаг анимации нажатия кнопки "Сделать ход"
  const [confirmCode, setConfirmCode] = useState(false);

  // метод нажатия кнопки "Сделать ход"
  const onConfirmCode = () => {
    // анимация нажатия кнопки
    setConfirmCode((confirmCode) => (confirmCode = !confirmCode));
    // генерация ответа на ход
    const answer = generateAnswer(currentUserCode, secretCode);

    setTimeout(() => {
      // анимация отжатия кнопки
      setConfirmCode((confirmCode) => (confirmCode = !confirmCode));
      // очистка полей ввода варианта кода игрока
      clearUserCodeField(currentUserCode);
      // сохранение в store варианта кода и соответственно вывода его на игровое поле
      dispatch(usersMoves(currentUserCode));
      // сохранение в store ответ на ход и вывод ответа в игровое поле
      setTimeout(() => {
        dispatch(responsesToUserMoves(answer));
        dispatch(lifePower());
        // проверка ответа на победу
        const checkWin = checkForVictory(answer);
        if (checkWin) {
          dispatch(isWin());
        }
        // проверка оставшихся ходов
        if (!checkWin && isAlive === 15) {
          dispatch(isLose());
        }
      }, 400);
    }, 450);
  };

  const isReady = useSelector((state) => state.gameReducer.isCodeReady);
  const btnStyle = classNames({
    'confirm-btn': true,
    'confirm-btn_visibility': show,
    'confirm-btn_opacity': show,
    'confirm-btn_ready': isReady,
    'confirm-btn_press': confirmCode,
  });

  return (
    <button className={btnStyle} disabled={!isReady} onClick={onConfirmCode}>
      Сделать ход
    </button>
  );
};

export default ConfirmBtn;

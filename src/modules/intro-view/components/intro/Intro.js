import { useCallback, useState } from 'react';
import classNames from 'classnames';

import ColorPartOfSecretCode from '../colorPartOfSecretCode/ColorPartOfSecretCode';

import './intro.scss';

const Intro = ({colorBg}) => {
  // состояние introOpacity отвечает за включение плавного исчезновения визуализации генерации секретного кода
  const [introOpacity, setIntroOpasity] = useState(false);
  // состояние introNone убирает элемент из потока документа, добавляя св-во display: none
  const [introNone, setIntroNone] = useState(false);

  // функция меняет состояние introOpacity и introNone
  // запускается в дочернем компоненте
  const introEnd = useCallback(() => {
    setTimeout(() => {
      setIntroNone(!introNone);
      colorBg();
    }, 1500);
    setIntroOpasity(!introOpacity);
    // eslint-disable-next-line
  }, [])

  // управление плавным исчезновением компонента через css классы
  const classNameIntro = classNames({
    intro: true,
    'intro-opacity': introOpacity,
    'intro-none': introNone
  });

  // базовое время появления каждого элемента кода
  const showTime = 500;

  return (
    <div className= {classNameIntro}>
      <ColorPartOfSecretCode showTime={showTime * 0}/>
      <ColorPartOfSecretCode showTime={showTime * 1}/>
      <ColorPartOfSecretCode showTime={showTime * 2}/>
      <ColorPartOfSecretCode showTime={showTime * 3} introEnd={introEnd}/>
    </div>
  )
}

export default Intro;
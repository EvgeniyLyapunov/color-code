import {useState, useEffect} from 'react';
import classNames from 'classnames';

import Intro from './components/intro/Intro';
import chooseBg from './util/chooseBg';
import generateColorCode from './util/generateColorCode';

import './intro-view.scss';

const IntroView = () => {
  // состояние отвечает за цвет bg, изначально чб
  const [colorBgGame, setColorBgGame] = useState(false); 
  // состояние отвечает за картинку bg, устанавливается в хуке useEffect
  const [bgGame, setBgGame] = useState('');
  // в это состояние записывается секретный код
  const [colorCode, setColorCode] = useState({});

  useEffect(() => {
    // генерация и запись в состояние colorCode секретного кода
    const code = generateColorCode();
    setColorCode(code);
    // выбор и запись картинки bg состояние bgGame
    const bg = chooseBg();
    setBgGame(bg);
    // eslint-disable-next-line
  }, []);

  // функция меняет состояние цвета bg с чб на цвет
  // передаётся в компонент Intro и вызывается там
  const colorBg = () => {
    setColorBgGame(!colorBgGame);
  }

  // установка css классов для управления картинкой bg
  const introViewClass = classNames({
    'intro-view': true,
    [`${bgGame}`]: true,
    'intro-view_bg-color': colorBgGame
  });

  return(
    <div className={introViewClass}>
      <Intro colorBg={colorBg}/>
      
    </div>
  )
}

export default IntroView;
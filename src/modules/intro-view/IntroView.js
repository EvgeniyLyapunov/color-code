import { useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import Intro from "./components/intro/Intro";

import "./intro-view.scss";

const IntroView = () => {
  // состояние отвечает за цвет bg, изначально чб
  const [colorBgGame, setColorBgGame] = useState(false);
  const bgGame = useSelector((state) => state.globalReducer.bgGame);

  // функция меняет состояние цвета bg с чб на цвет
  // передаётся в компонент Intro и вызывается там
  const colorBg = () => {
    setColorBgGame(!colorBgGame);
  };

  // установка css классов для управления картинкой bg
  const introViewClass = classNames({
    "intro-view": true,
    [`${bgGame}`]: true,
    "intro-view_bg-color": colorBgGame,
  });

  return (
    <div className={introViewClass}>
      <Intro colorBg={colorBg} />
    </div>
  );
};

export default IntroView;

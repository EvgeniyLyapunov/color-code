import { useState, useEffect } from "react";

import './color-part-of-secret-code.scss';

const ColorPartOfSecretCode = ({showTime, introEnd}) => {
  const [bgColor, setBgColor] = useState('white');

  // функция возвращает случайный цвет из заданного набора
  function setRandomColor() {
    const max = 5;
    const min = 1;
    let rnd = Math.floor(Math.random() * (max - min + 1)) + min;

    switch(rnd) {
      case 1:
        return '#ff006e';
      case 2:
        return '#ffed66';
      case 3:
        return '#3a86ff';
      case 4:
        return '#16db65';
      case 5:
        return '#d09259';
      default:
        return 'white';
    }
  }

  useEffect(() => {
    for(let i = 1; i <= 15; i++) {
      setTimeout(() => {
        const color = setRandomColor();
        if(i === 15) {
          setBgColor('end');
        } else {
          setBgColor(color);
        }
      }, i * 100 + showTime);
    }
    // eslint-disable-next-line
  }, []);


  let style = bgColor === 'end' ? {
    backgroundColor: '#ffed66',
    border: 'none',
    boxShadow: '-5px 5px 20px #ffed66, -5px -5px 20px #ffed66, 5px -5px 20px #ffed66, 5px 5px 20px #ffed66, -10px -10px 30px #ffed66, 10px 10px 30px #ffed66, -10px 10px 30px #ffed66, 10px -10px 30px #ffed66',
  } : {
    backgroundColor: `${bgColor}`
  }

  // если prop introEnd не null и перебор цветов закончен
  // запускается функция introEnd, запускающая эффект плавного исчезновения компонента
  if(introEnd && bgColor === 'end') {
    setTimeout(() => {
    introEnd();
    }, 150);
  }

  return (
    <div className="square" style={style}>

    </div>
  )
}

export default ColorPartOfSecretCode;
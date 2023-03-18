import { useState, useEffect, useMemo } from "react";

import getRandomColor from '../../util/getRandomColor';

import './color-part-of-secret-code.scss';

const ColorPartOfSecretCode = ({showTime, introEnd}) => {
  const [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    for(let i = 1; i <= 15; i++) {
      setTimeout(() => {
        const color = getRandomColor();
        if(i === 15) {
          setBgColor('end');
        } else {
          setBgColor(color);
        }
      }, i * 100 + showTime);
    }
    // eslint-disable-next-line
  }, []);

  const styleChanged = useMemo(() => {
    return {
      backgroundColor: `${bgColor}`
    }
    // eslint-disable-next-line
  }, [bgColor]);

  const styleEnd = useMemo(() => {
    return {
      backgroundColor: '#ffed66',
      border: 'none',
      boxShadow: '-5px 5px 20px #ffed66, -5px -5px 20px #ffed66, 5px -5px 20px #ffed66, 5px 5px 20px #ffed66, -10px -10px 30px #ffed66, 10px 10px 30px #ffed66, -10px 10px 30px #ffed66, 10px -10px 30px #ffed66',
    }
    // eslint-disable-next-line
  }, [bgColor]);

  let style = bgColor === 'end' ? styleEnd : styleChanged;

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
import { useState, useEffect } from "react";

import './square.scss';

const Square = ({showTime}) => {
  const [bgColor, setBgColor] = useState('white');

  function setRandomColor() {
    let rnd = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

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
  }, []);


  let style = bgColor === 'end' ? {
    backgroundColor: '#ffed66',
    border: 'none',
    boxShadow: '-5px 5px 20px #ffed66, -5px -5px 20px #ffed66, 5px -5px 20px #ffed66, 5px 5px 20px #ffed66, -10px -10px 30px #ffed66, 10px 10px 30px #ffed66, -10px 10px 30px #ffed66, 10px -10px 30px #ffed66',
  } : {
    backgroundColor: `${bgColor}`
  }

  return (
    <div className="square" style={style}>

    </div>
  )
}

export default Square;
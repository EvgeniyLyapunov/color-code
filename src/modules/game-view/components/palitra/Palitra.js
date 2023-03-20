import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import './palitra.scss';

const Palitra = () => {
  const isPalitraVisible = useSelector(
    (store) => store.gameReducer.isChooseColor
  );

  const [isDisplay, setIsDisplay] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  useEffect(() => {
    // условие для первого запуска
    if (isPalitraVisible === false && isDisplay === false) {
      return;
      // условие для открытия палитры
    } else if (isPalitraVisible === true && isDisplay === false) {
      setIsDisplay((isDisplay) => (isDisplay = !isDisplay));
      setTimeout(() => {
        setIsOpacity((isOpacity) => (isOpacity = !isOpacity));
      }, 50);
      return;
      // условие для закрытия палитры
    } else if (isPalitraVisible === false && isDisplay === true) {
      setIsOpacity((isOpacity) => (isOpacity = !isOpacity));
      setTimeout(() => {
        setIsDisplay((isDisplay) => (isDisplay = !isDisplay));
      }, 350);
    }
    // eslint-disable-next-line
  }, [isPalitraVisible]);

  const palitraStyle = classNames({
    politra: true,
    politra_display: isDisplay,
    politra_opacity: isOpacity,
  });

  return (
    <div className={palitraStyle}>
      <div className='palitra__box'>
        <div className='palitra__box-item'></div>
        <div className='palitra__box-item'></div>
        <div className='palitra__box-item'></div>
        <div className='palitra__box-item'></div>
        <div className='palitra__box-item'></div>
        <div className='palitra__box-item'></div>
      </div>
    </div>
  );
};

export default Palitra;

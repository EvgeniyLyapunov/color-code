import { useState, useEffect } from 'react';

import Title from '../title/Title';
import { BtnStart } from '../btn-start/BtnStart';
import './main-window.scss';

const MainWindow = ({gamePlay}) => {
  const[show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show)
    }, 10);
    // eslint-disable-next-line
  }, []);

  const onStartGame = () => {

    setTimeout(() => {
      gamePlay('intro');
    }, 500)
  }

  return(
      <div className='main-window'>
        <Title show={show}/>
        <BtnStart show={show} onClick={onStartGame}>Старт</BtnStart>
      </div>
  )
}

export default MainWindow;
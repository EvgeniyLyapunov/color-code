import { useState, useEffect } from 'react';

import Title from '../title/Title';
import { BtnStart } from '../btn-start/BtnStart';
import './main-window.scss';

const MainWindow = () => {
  const[show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(!show)
    }, 200);
    // eslint-disable-next-line
  }, []);

  return(
      <div className='main-window'>
        <Title show={show}/>
        <BtnStart show={show}>Старт</BtnStart>
      </div>
  )
}

export default MainWindow;
import { useState, useEffect } from 'react';
import classNames from 'classnames';

import './modal.scss';

const Modal = ({showModal}) => {
  const modal = classNames({
    modal: true,
    modal__show: showModal
  });

  const modalWindow = classNames({
    modal__window: true,
    modal__window_show: showModal
  })
  

  return(
    <div className={modal}>
      <div className={modalWindow}>

      </div>
    </div>
  )
}

export default Modal;


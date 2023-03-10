import { useState, useEffect } from 'react';
import classNames from 'classnames';

import modalBg from './modalBg';
import modalContent from './modalContent';

import './modal.scss';

const Modal = ({showModal, onCloseModal}) => {
  const[closeWindow, setCloseWindow] = useState(false);

  useEffect(() => {
    setCloseWindow(false);
  },[showModal]);

  const closeModal = () => {
    setCloseWindow(!closeWindow);
    setTimeout(() => {
      onCloseModal();
    }, 700)
  };

  const modal = classNames({
    modal: true,
    modal__show: showModal
  });

  const bg = modalBg(showModal);

  const modalWindow = classNames({
    modal__window: true,
    [`${bg}`]: true,
    modal__window_show: showModal,
    modal__window_close: closeWindow
  });

  const contentActive = modalContent(showModal);


  return(
    <div className={modal}>
      <div className={modalWindow}>
        <button className='modal__window-close' onClick={closeModal}/>
        {contentActive}
      </div>
    </div>
  )
}

export default Modal;


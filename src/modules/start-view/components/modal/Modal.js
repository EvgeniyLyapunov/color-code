import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import { showModal } from '../../../../redux/slices/startSlise';
import modalBg from './modalBg';
import modalContent from './modalContent';

import './modal.scss';

const Modal = () => {
  const showModalId = useSelector((state) => state.startReducer.showModalId);
  const dispatch = useDispatch();
  // флаг для плавного сворачивания модального окна
  const [closeWindow, setCloseWindow] = useState(false);

  useEffect(() => {
    setCloseWindow(false);
  }, [showModalId]);

  const closeModal = () => {
    setCloseWindow(!closeWindow);
    setTimeout(() => {
      dispatch(showModal(''));
    }, 700);
  };

  const modal = classNames({
    modal: true,
    modal__show: showModalId,
  });

  const bg = modalBg(showModalId);

  const modalWindow = classNames({
    modal__window: true,
    [`${bg}`]: true,
    modal__window_show: showModalId,
    modal__window_close: closeWindow,
  });

  const contentActive = modalContent(showModalId);

  return (
    <div className={modal}>
      <div className={modalWindow}>
        <button className='modal__window-close' onClick={closeModal} />
        {contentActive}
      </div>
    </div>
  );
};

export default Modal;

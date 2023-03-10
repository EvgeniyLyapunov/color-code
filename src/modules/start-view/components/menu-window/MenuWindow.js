import { useState, useEffect } from 'react';

import Menu from '../menu/Menu';
import Modal from '../modal/Modal';

import './menu-window.scss';

const MenuWindow = () => {
  const[showMenu, setShowMenu] = useState(false);
  const[showModal, setShowModal] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShowMenu(!showMenu)
    }, 10);
    // eslint-disable-next-line
  }, []);

  const onShowModal = (id) => {
    setShowModal(id);
  }

  const onCloseModal = () => {
    setShowModal('');
  }

  return(
    <div className='menu-window'>
      <Menu showMenu={showMenu} onShowModal={onShowModal}/>
      <Modal showModal={showModal} onCloseModal={onCloseModal}/>
    </div>
  )
}

export default MenuWindow;
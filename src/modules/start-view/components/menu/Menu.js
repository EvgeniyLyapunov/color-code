import classNames from 'classnames';

import './menu.scss';

const Menu = ({showMenu, onShowModal}) => {
  const menu = classNames({
    menu: true,
    menu__visible: showMenu
  });

  const openModal = (id) => {
    onShowModal(id);
  }

  return(
    <ul className={menu}>
      <li className='menu__item'>
        <button className='menu__item-btn' id='auth' onClick={(e) => openModal(e.target.id)}>
          Авторизация
        </button>
      </li>
      <li className='menu__item'>
        <button className='menu__item-btn' id='descr' onClick={(e) => openModal(e.target.id)}>
          Описание
        </button>
      </li>
      <li className='menu__item'>
        <button className='menu__item-btn' id='author' onClick={(e) => openModal(e.target.id)}>
          Автор
        </button>
      </li>
    </ul>
  )
}

export default Menu;
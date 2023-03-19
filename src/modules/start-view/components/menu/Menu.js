import classNames from 'classnames';
import { useDispatch } from 'react-redux';

import { showModal } from '../../../../redux/slices/startSlise';

import './menu.scss';

const Menu = ({ showMenu }) => {
  const dispatch = useDispatch();

  const menu = classNames({
    menu: true,
    menu__visible: showMenu,
  });

  return (
    <ul className={menu}>
      <li className='menu__item'>
        <button
          className='menu__item-btn'
          id='auth'
          onClick={(e) => dispatch(showModal(e.target.id))}
        >
          Авторизация
        </button>
      </li>
      <li className='menu__item'>
        <button
          className='menu__item-btn'
          id='descr'
          onClick={(e) => dispatch(showModal(e.target.id))}
        >
          Описание
        </button>
      </li>
      <li className='menu__item'>
        <button
          className='menu__item-btn'
          id='author'
          onClick={(e) => dispatch(showModal(e.target.id))}
        >
          Автор
        </button>
      </li>
    </ul>
  );
};

export default Menu;

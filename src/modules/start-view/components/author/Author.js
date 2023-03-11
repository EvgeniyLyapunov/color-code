

import './author.scss';

const Author = () => {

  return (
    <div className='author'>
      <p className='author__info'>
        Автор и&nbsp;разработчик проекта &laquo;Color&nbsp;Code&raquo;&nbsp;&mdash;<br/> Евгений Ляпунов, Краснодар.
      </p>
      <div className='author__brand'>

      </div>
      <ul className='author__contacts'>
        <li className='author__contacts-item'>
          <a className='author__contacts-link author__contacts-link_site' href="https://little-wing.ru">сайт</a>
        </li>
        <li className='author__contacts-item'>
          <a className='author__contacts-link author__contacts-link_email' href="mailto:lyapunovcs@gmail.com">почта</a>
        </li>
        <li className='author__contacts-item'>
          <a className='author__contacts-link author__contacts-link_telegram' href="https://t.me/EvgenyLyapunov">телеграм</a>
        </li>
        <li className='author__contacts-item'>
          <a className='author__contacts-link author__contacts-link_github' href="https://github.com/EvgeniyLyapunov">гитхаб</a>
        </li>
      </ul>
    </div>
  )
};

export default Author;
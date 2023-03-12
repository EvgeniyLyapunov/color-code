

import './description.scss';

const Description = () => {
  return(
    <div className='description'>
      <h2 className='description__title'>Предыстория</h2>
      <p className='description__text description__text-color-red'>
        Color Code&nbsp;&mdash; это игра, в&nbsp;которую я&nbsp;играл в&nbsp;детстве. Пластмассовое игровое поле было разделено на&nbsp;зоны, где с&nbsp;помощью маленьких цветных фишек один игрок загадывал код, а&nbsp;второй пытался его угадать.
      </p>
      <p className='description__text description__text-color-yellow'>
        Проблема была у&nbsp;игрока, который загадывал код&nbsp;&mdash; ему было просто скучно, т.к. его ролью было придумать комбинацию и&nbsp;ждать варианты ответов второго игрока.
      </p>
      <p className='description__text description__text-color-brown'>
        Я&nbsp;написал Color Code, т.к. очень любил эту игру. Сейчас код загадывается программой и&nbsp;игрок не&nbsp;зависит ни&nbsp;от&nbsp;кого.
      </p>
      <h2 className='description__title'>Описание игры</h2>
      <p className='description__text description__text-color-green'>
        Итак, на&nbsp;старте есть скрытый от&nbsp;нас код, являющийся комбинацией цветов. Наша задача, используя логику, за&nbsp;определённое число попыток разгадать эту последовательность.
      </p>
      <p className='description__text description__text-color-yellow'>
        После каждого хода мы&nbsp;получаем определённую информацию о&nbsp;том, насколько наш вариант соответствует &laquo;Секретному Коду&raquo;.
      </p>
      <p className='description__text description__text-color-red'>
        Эта информация&nbsp;&mdash; цветовой код, состоящий из&nbsp;двух цветов&nbsp;&mdash; чёрного и&nbsp;белого. Он&nbsp;строится по&nbsp;такому принципу: <br/>
        &mdash;&nbsp;чёрный, если цвет и&nbsp;его позиция в&nbsp;нашем варианте совпадают с&nbsp;цветом и&nbsp;его позицией в&nbsp;&laquo;Секрктоым коде&raquo;;<br/>
        &mdash;&nbsp;белый, если цвет из&nbsp;нашего варианта есть в&nbsp;&laquo;Секретном коде&raquo;, но&nbsp;их&nbsp;позиции не&nbsp;совпадают;
      </p>
      <h2 className='description__title'>Заключение</h2>
      <p className='description__text description__text-color-green'>
        Таким образом, делая ход и&nbsp;получая информацию мы&nbsp;решаем задачу и&nbsp;получаем &laquo;Секретный код&raquo;.
      </p>
      <p className='description__text description__text-color-red'>
        Желаю вам насладиться своей логикой, приводящей к&nbsp;победе!
      </p>
    </div>
  )
}

export default Description;
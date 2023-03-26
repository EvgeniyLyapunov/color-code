import './description.scss';

const Description = () => {
  return (
    <div className='description'>
      <h2 className='description__title'>Предыстория</h2>
      <p className='description__text description__text-color-red'>
        Color Code&nbsp;&mdash; это игра, в&nbsp;которую я&nbsp;играл
        в&nbsp;детстве. Пластмассовое игровое поле было разделено на&nbsp;зоны,
        где с&nbsp;помощью маленьких цветных фишек один игрок загадывал код,
        а&nbsp;второй пытался его угадать.
      </p>
      <p className='description__text description__text-color-yellow'>
        Проблема была у&nbsp;игрока, который загадывал код&nbsp;&mdash; ему было
        просто скучно, т.к. его ролью было придумать комбинацию и&nbsp;ждать
        варианты ответов второго игрока.
      </p>
      <p className='description__text description__text-color-blue'>
        Я&nbsp;написал Color Code, т.к. очень любил эту игру. Сейчас код
        загадывается программой и&nbsp;игрок не&nbsp;зависит
        ни&nbsp;от&nbsp;кого.
      </p>
      <h2 className='description__title'>Описание игры</h2>
      <p className='description__text description__text-color-green'>
        Итак, на&nbsp;старте есть скрытый от&nbsp;нас код, являющийся
        комбинацией цветов. Наша задача, используя логику, за&nbsp;определённое
        число попыток разгадать эту последовательность.
      </p>
      <p className='description__text description__text-color-yellow'>
        После каждого хода мы&nbsp;получаем определённую информацию о&nbsp;том,
        насколько наш вариант соответствует &laquo;Секретному Коду&raquo;.
      </p>
      <p className='description__text description__text-color-red'>
        Ответ строится из&nbsp;трёх иконок:
        <br />
        <span className='description__text-icon description__text-icon_yes'></span>
        &mdash;&nbsp;означает что положение одного из&nbsp;цветов в&nbsp;нашем
        варианте полностью совпадает с&nbsp;таким&nbsp;же цветом
        и&nbsp;положением его в&nbsp;секретном коде;
        <br />
        <span className='description__text-icon description__text-icon_almost'></span>
        &mdash;&nbsp;означает, что один из&nbsp;цветов в&nbsp;нашем варианте
        есть и&nbsp;в&nbsp; секретном коде, но&nbsp;их&nbsp;положение
        не&nbsp;совпадает;
        <br />
        <span className='description__text-icon description__text-icon_no'></span>
        &mdash;&nbsp;говорит, что какой то&nbsp;из&nbsp;цветов в&nbsp;нашем
        варианте отсутствует в&nbsp;секретном коде.
      </p>
      <p className='description__text description__text-color-blue'>
        Цвета в&nbsp;секретном коде могут повторяться, например: красный синий
        красный красный.
      </p>
      <p className='description__text description__text-color-green'>
        Иконки ответа всегда распологаются в&nbsp;случайном порядке, т.е.
        положение иконки в&nbsp;ответе скорее всего не&nbsp;совпадает
        с&nbsp;положением цвета в&nbsp;секретном коде или цвета в&nbsp;нашем
        варианте.
      </p>
      <h2 className='description__title'>Заключение</h2>
      <p className='description__text description__text-color-green'>
        Таким образом, делая ход и&nbsp;получая информацию мы&nbsp;решаем задачу
        и&nbsp;получаем &laquo;Секретный код&raquo;.
      </p>
      <p className='description__text description__text-color-red'>
        Желаю вам насладиться своей логикой, приводящей к&nbsp;победе!
      </p>
    </div>
  );
};

export default Description;

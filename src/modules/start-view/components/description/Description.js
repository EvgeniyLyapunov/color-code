

import './description.scss';

const Description = () => {

  return(
    <div className='description'>
      <h2 className='description__title'>Описание игры</h2>
      <p className='description__text'>
        Color Code&nbsp;&mdash; это игра, в&nbsp;которую я&nbsp;играл в&nbsp;детстве. Пластмассовое игровое поле было разделено на&nbsp;зоны, где с&nbsp;помощью маленьких цветных фишек один игрок загадывал код, а&nbsp;второй пытался его угадать. Проблема была у&nbsp;игрока, который загадывал код&nbsp;&mdash; ему было просто скучно, т.к. его ролью было загадать код и&nbsp;ждать варианты ответов второго игрока. В&nbsp;моей семье очень скоро никто не&nbsp;хотел играть со&nbsp;мной. Я&nbsp;написал Color Code, т.к. очень любил играть в&nbsp;эту игру. Сейчас код загадывается программой и&nbsp;игрок не&nbsp;зависит ни&nbsp;от&nbsp;кого.
      </p>
    </div>
  )
}

export default Description;
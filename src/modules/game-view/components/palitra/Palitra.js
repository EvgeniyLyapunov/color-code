import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import {
  selectedColorId,
  chooseColor,
  usersVariantCode,
} from '../../../../redux/slices/gameSlice';

import './palitra.scss';

const Palitra = () => {
  const isPalitraVisible = useSelector(
    (store) => store.gameReducer.isChooseColor
  );
  const itemCode = useSelector((store) => store.gameReducer.codeItemId);
  const usersCode = useSelector((store) => store.gameReducer.usersVariantCode);

  const dispatch = useDispatch();

  const [isDisplay, setIsDisplay] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);

  // открывает и закрывает палитру
  useEffect(() => {
    // условие для первого запуска
    if (isPalitraVisible === false && isDisplay === false) {
      return;
      // условие для открытия палитры
    } else if (isPalitraVisible === true && isDisplay === false) {
      setIsDisplay((isDisplay) => (isDisplay = !isDisplay));
      setTimeout(() => {
        setIsOpacity((isOpacity) => (isOpacity = !isOpacity));
      }, 50);
      return;
      // условие для закрытия палитры
    } else if (isPalitraVisible === false && isDisplay === true) {
      setIsOpacity((isOpacity) => (isOpacity = !isOpacity));
      setTimeout(() => {
        setIsDisplay((isDisplay) => (isDisplay = !isDisplay));
      }, 350);
    }
    // eslint-disable-next-line
  }, [isPalitraVisible]);

  // функция нажатия на кнопку с цветом в палитре
  const palitraItemPress = (e) => {
    if (e.target !== e.currentTarget) {
      if (e.target.id === 'cancel') {
        dispatch(selectedColorId(''));
        const oldColorClass = `user-code-field__item_${
          usersCode[`${itemCode}`]
        }`;
        dispatch(usersVariantCode());
        e.target.classList.add('palitra__box-item_pressed');
        // этот setTimeout запускается после анимации нажатия кнопки
        // запускает анимацию отжатия кнопки и анимацию исчезновения палитры
        setTimeout(() => {
          e.target.classList.remove('palitra__box-item_pressed');
          dispatch(chooseColor());
          // этот setTimeout запускается после анимации исчезновения палитры
          // и запускает анимацию удаление цвета на выбранный элемент
          setTimeout(() => {
            document
              .getElementById(`${itemCode}`)
              .classList.remove(oldColorClass);
          }, 500);
        }, 350);
      } else {
        dispatch(selectedColorId(e.target.id));
        const oldColorClass = `user-code-field__item_${
          usersCode[`${itemCode}`]
        }`;
        dispatch(usersVariantCode());
        e.target.classList.add('palitra__box-item_pressed');
        // этот setTimeout запускается после анимации нажатия кнопки
        // запускает анимацию отжатия кнопки и анимацию исчезновения палитры
        setTimeout(() => {
          e.target.classList.remove('palitra__box-item_pressed');
          dispatch(chooseColor());
          // этот setTimeout запускается после анимации исчезновения палитры
          // и запускает анимацию добавления выбранного цвета на выбранный элемент
          setTimeout(() => {
            document
              .getElementById(`${itemCode}`)
              .classList.remove(oldColorClass);
            const colorClass = `user-code-field__item_${e.target.id}`;
            document.getElementById(`${itemCode}`).classList.add(colorClass);
          }, 500);
        }, 350);
      }
    } else {
      return;
    }
  };

  const palitraStyle = classNames({
    palitra: true,
    palitra_display: isDisplay,
    palitra_opacity: isOpacity,
  });

  return (
    <div className={palitraStyle}>
      <div className='palitra__box' onClick={(e) => palitraItemPress(e)}>
        <div className='palitra__box-item palitra__box-item_red' id='red'></div>
        <div
          className='palitra__box-item palitra__box-item_yellow'
          id='yellow'
        ></div>
        <div
          className='palitra__box-item palitra__box-item_blue'
          id='blue'
        ></div>
        <div
          className='palitra__box-item palitra__box-item_green'
          id='green'
        ></div>
        <div
          className='palitra__box-item palitra__box-item_brown'
          id='brown'
        ></div>
        <div className='palitra__box-item palitra__box-item_cancel' id='cancel'>
          Отменить
        </div>
      </div>
    </div>
  );
};

export default Palitra;

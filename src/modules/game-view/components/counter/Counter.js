import { useSelector } from 'react-redux';
import classNames from 'classnames';

import './counter.scss';

const Counter = ({ show }) => {
  const life = useSelector((state) => state.gameReducer.lifePower);
  const counterStyle = classNames({
    counter: true,
    counter_visibility: show,
    counter_opacity: show,
  });
  const lineColorStyle = classNames({
    counter__line: true,
    counter__line_danger: life > 60 ? false : true,
    counter__line_verydanger: life > 30 ? false : true,
  });

  const lineStyle = {
    width: life,
  };

  return (
    <div className={counterStyle}>
      <span className='counter__label'>Ваша энергия</span>
      <div className={lineColorStyle} style={lineStyle}></div>
    </div>
  );
};

export default Counter;

import { useSelector, useDispatch } from 'react-redux/es/exports';
import classNames from 'classnames';

import { menuVisible } from '../../../../redux/slices/startSlise';

import './burger.scss';

const Burger = () => {
  const buttonState = useSelector((state) => state.startReducer.menuVisible);
  const dispatch = useDispatch();

  const burger = classNames({
    burger: true,
    burger__open: buttonState,
  });

  return <button className={burger} onClick={() => dispatch(menuVisible())} />;
};

export default Burger;

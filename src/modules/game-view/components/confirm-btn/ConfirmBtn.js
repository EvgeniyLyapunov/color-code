// import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import './confirm-btn.scss';

const ConfirmBtn = ({ show }) => {
  const btnStyle = classNames({
    'confirm-btn': true,
    'confirm-btn_visibility': show,
    'confirm-btn_opacity': show,
  });

  return <button className={btnStyle}>Сделать ход</button>;
};

export default ConfirmBtn;

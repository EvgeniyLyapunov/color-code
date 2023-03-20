import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { codeItemId, chooseColor } from '../../../../redux/slices/gameSlice';

import './user-code-field.scss';

const UserCodeField = ({ show }) => {
  const dispatch = useDispatch();

  const codeFieldStyle = classNames({
    'user-code-field': true,
    'user-code-field_visibility': show,
    'user-code-field_opacity': show,
  });

  const openEditCodeModal = (e) => {
    dispatch(codeItemId(e.target.id));
    e.target.classList.add('user-code-field__item_pressed');
    setTimeout(() => {
      e.target.classList.remove('user-code-field__item_pressed');
      dispatch(chooseColor());
    }, 400);
  };

  return (
    <div
      className={codeFieldStyle}
      id='user-code-field'
      onClick={(e) => openEditCodeModal(e)}
    >
      <div className='user-code-field__item' id='first'></div>
      <div className='user-code-field__item' id='second'></div>
      <div className='user-code-field__item' id='third'></div>
      <div className='user-code-field__item' id='fourth'></div>
    </div>
  );
};

export default UserCodeField;

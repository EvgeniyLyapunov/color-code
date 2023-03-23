import { nanoid } from '@reduxjs/toolkit';

import ItemOfUserCode from '../item-of-user-code/ItemOfUserCode';

import './user-move.scss';

const UserMove = ({ userCode }) => {
  const colorCode = [];
  for (let field in userCode) {
    const classField = `item-of-user-code item-of-user-code_${
      userCode[`${field}`]
    }`;
    const item = <ItemOfUserCode key={nanoid()} classField={classField} />;
    colorCode.push(item);
  }
  return <div className='user-move'>{colorCode}</div>;
};

export default UserMove;

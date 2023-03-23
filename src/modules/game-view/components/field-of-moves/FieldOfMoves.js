import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import UserMove from '../users-move/UsersMove';
import Answer from '../answer/Answer';

import './field-of-moves.scss';

const FieldOfMoves = () => {
  const moves = useSelector((state) => state.gameReducer.usersMoves);
  const answers = useSelector(
    (state) => state.gameReducer.responsesToUserMoves
  );

  const movesList = moves.map((item) => {
    return <UserMove key={nanoid()} userCode={item} />;
  });

  const answersList = answers.map((item) => {
    return <Answer key={nanoid()} answer={item} />;
  });

  return (
    <div className='field-of-moves'>
      <div className='field-of-moves__responses'>{answersList}</div>
      <div className='field-of-moves__requests'>{movesList}</div>
    </div>
  );
};

export default FieldOfMoves;

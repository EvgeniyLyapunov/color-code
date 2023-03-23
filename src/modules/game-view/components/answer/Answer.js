import { nanoid } from '@reduxjs/toolkit';

import ItemOfAnswer from '../item-of-answer/ItemOfAnswer';

import './answer.scss';

const Answer = ({ answer }) => {
  const response = answer.map((item) => {
    switch (item) {
      case 'yes':
        const yes = 'item-of-answer item-of-answer_yes';
        return <ItemOfAnswer key={nanoid()} classField={yes} />;
      case 'no':
        const no = 'item-of-answer item-of-answer_no';
        return <ItemOfAnswer key={nanoid()} classField={no} />;
      case 'almost':
        const almost = 'item-of-answer item-of-answer_almost';
        return <ItemOfAnswer key={nanoid()} classField={almost} />;
      default:
        return 'Unknown case';
    }
  });

  return <div className='answer'>{response}</div>;
};

export default Answer;

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

import './finish-view.scss';

const FinishView = () => {
  const bg = useSelector((state) => state.globalReducer.bgFinishWin);

  const finishViewStyle = classNames({
    'finish-view': true,
    [`finish-view${bg}`]: true,
  });

  const closeBtnStyle = classNames({
    'finish-view__close-btn': true,
  });

  return (
    <div className={finishViewStyle}>
      <button className={closeBtnStyle}>Закрыть</button>
    </div>
  );
};

export default FinishView;

// onClick={onPressClose}

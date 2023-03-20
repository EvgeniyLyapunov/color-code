import classNames from 'classnames';
import { useSelector } from 'react-redux';

import './loading.scss';

const Loading = () => {
  const bg = useSelector((state) => state.globalReducer.bgGame);
  const loadingClass = classNames({
    'loading-view': true,
    [`loading-${bg}`]: true,
  });

  return <div className={loadingClass}></div>;
};

export default Loading;

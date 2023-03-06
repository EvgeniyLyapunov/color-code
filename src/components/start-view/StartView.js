

import './start-view.scss';

const StartView = () => {
  return(
    <div className='start-view'>
      <div className="start-view__title-box">
        <h1 className="start-view__title">Color Code</h1>
        <ul className="start-view__title-decor">
          <li className="start-view__title-decor-color start-view__title-decor-color-red"></li>
          <li className="start-view__title-decor-color start-view__title-decor-color-yellow"></li>
          <li className="start-view__title-decor-color start-view__title-decor-color-green"></li>
          <li className="start-view__title-decor-color start-view__title-decor-color-blue"></li>
          <li className="start-view__title-decor-color start-view__title-decor-color-brown"></li>
        </ul>
      </div>
    </div>
  )
};

export default StartView;
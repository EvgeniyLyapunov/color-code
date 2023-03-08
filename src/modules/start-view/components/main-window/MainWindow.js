import Title from '../title/Title';
import { BtnStart } from '../btn-start/BtnStart';
import './main-window.scss';

const MainWindow = () => {
  return(
      <div className='main-window'>
        <Title/>
        <BtnStart>Старт</BtnStart>
      </div>
  )
}

export default MainWindow;
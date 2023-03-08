import { useState } from "react";

import Burger from "./components/burger/Burger";
import MainWindow from "./components/main-window/MainWindow";
import MenuWindow from "./components/menu-window/MenuWindow";

import './start-view.scss';

const StartView = () => {
  const [menu, setMenu] = useState(true);

  const onMenuVisible = () => {
    setMenu(!menu);
  }

  const windows = menu ? <MainWindow/> 
                        : <MenuWindow/>;
  return(
    <div className='start-view'>
      <Burger onMenuVisible={onMenuVisible}/>
        {windows}
    </div>
  )
}

export default StartView;
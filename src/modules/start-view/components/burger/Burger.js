import { useState } from 'react';
import classNames from 'classnames';

import './burger.scss'

const Burger = ({onMenuVisible}) => {
  const [btnState, setBtnState] = useState(false);
  const burger = classNames({
    burger: true,
    burger__open: btnState
  });
  const openMenu = () => {
    setBtnState(!btnState);
    onMenuVisible();
  }

  return(
    <button className={burger}
            onClick={openMenu}/>
  )
}

export default Burger;
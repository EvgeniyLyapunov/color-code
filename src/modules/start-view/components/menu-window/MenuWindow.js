import { useState, useEffect } from "react";

import Menu from "../menu/Menu";
import Modal from "../modal/Modal";

import "./menu-window.scss";

const MenuWindow = () => {
  // флаг для плавного появления элемента
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(!showMenu);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="menu-window">
      <Menu showMenu={showMenu} />
      <Modal />
    </div>
  );
};

export default MenuWindow;

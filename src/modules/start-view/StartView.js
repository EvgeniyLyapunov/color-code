import { useSelector } from "react-redux/es/exports";

import Burger from "./components/burger/Burger";
import MainWindow from "./components/main-window/MainWindow";
import MenuWindow from "./components/menu-window/MenuWindow";

import "./start-view.scss";

const StartView = () => {
  const menuVisible = useSelector((state) => state.menuVisible);

  const windows = menuVisible ? <MenuWindow /> : <MainWindow />;

  return (
    <div className="start-view">
      <Burger />
      {windows}
    </div>
  );
};

export default StartView;

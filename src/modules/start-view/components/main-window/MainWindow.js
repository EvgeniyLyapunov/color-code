import { useState, useEffect } from "react";

import Title from "../title/Title";
import BtnStart from "../btn-start/BtnStart";
import "./main-window.scss";

const MainWindow = () => {
  // флаг для включения плавного появления элементов
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(!show);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="main-window">
      <Title show={show} />
      <BtnStart show={show} />
    </div>
  );
};

export default MainWindow;

import React from "react";
import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";

import StartView from "../modules/start-view/StartView";
// import IntroView from "../modules/intro-view/IntroView";
// import FinishView from "../modules/finish-view/FinishView";

import Loading from "./components/loading/Loading";

import "./app.scss";

const IntroView = lazy(() => import("../modules/intro-view/IntroView"));

function App() {
  const currentStage = useSelector((state) => state.gameStage);

  function setCurrentView() {
    switch (currentStage) {
      case "start":
        return <StartView />;
      case "intro":
        return <IntroView />;
      case "game":
        return null;
      case "finish":
        return null;
      default:
        return null;
    }
  }

  const currentView = setCurrentView();

  return (
    <div className="app">
      <Suspense fallback={<Loading />}>{currentView}</Suspense>
    </div>
  );
}

export default App;

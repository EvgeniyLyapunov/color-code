import generateColorCode from "../utils/generateColorCode";
import chooseBg from "../utils/chooseBg";

export const gameStage = (nextStage) => {
  return {
    type: "GAME_STAGE",
    payload: nextStage,
  };
};

export const menuVisible = () => {
  return {
    type: "MENU_VISIBLE",
  };
};

export const showModal = (idModal) => {
  return {
    type: "SHOW_MODAL",
    payload: idModal,
  };
};

export const startBtnEffect = () => {
  return {
    type: "START_BTN_EFFECT",
  };
};

export const bgGame = () => {
  const picture = chooseBg();
  return {
    type: "BG_GAME",
    payload: picture,
  };
};

export const secretCode = () => {
  const secretCode = generateColorCode();
  return {
    type: "SECRET_CODE",
    payload: secretCode,
  };
};

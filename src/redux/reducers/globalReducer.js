const initialState = {
  // переключение модулей
  gameStage: "start",
  // переключение окон в модуле StartView
  menuVisible: false,
  startBtnEffect: false,
  bgGame: "",
  secretCode: {},
  colorsByString: ["red", "yellow", "blue", "green", "brown"],
  colorsByHash: ["#ff006e", "#ffed66", "#3a86ff", "#16db65", "#d09259"],
  responseByString: ["black", "white"],
  responseByHash: ["#22223b", "#dee2e6"],
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GAME_STAGE":
      return {
        ...state,
        gameStage: action.payload,
      };
    case "MENU_VISIBLE":
      return {
        ...state,
        menuVisible: !state.menuVisible,
      };
    case "START_BTN_EFFECT":
      return {
        ...state,
        startBtnEffect: !state.startBtnEffect,
      };
    case "BG_GAME":
      return {
        ...state,
        bgGame: action.payload,
      };
    case "SECRET_CODE":
      return {
        ...state,
        secretCode: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default globalReducer;

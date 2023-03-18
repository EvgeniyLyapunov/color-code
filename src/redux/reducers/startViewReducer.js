const initialState = {
  // переключение окон в модуле StartView
  menuVisible: false,
  // добавление эффекта нажатия на кнопку старт
  startBtnEffect: false,
  // в showModal записывается id активного модального окна
  showModalId: "",
};

const startViewReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MENU_VISIBLE":
      return {
        ...state,
        menuVisible: !state.menuVisible,
      };
    case "SHOW_MODAL":
      return {
        ...state,
        showModalId: action.payload,
      };
    case "START_BTN_EFFECT":
      return {
        ...state,
        startBtnEffect: !state.startBtnEffect,
      };
    default:
      return {
        ...state,
      };
  }
};

export default startViewReducer;

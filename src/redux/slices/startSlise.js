import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // переключение окон в модуле StartView
  menuVisible: false,
  // добавление эффекта нажатия на кнопку старт
  startBtnEffect: false,
  // в showModal записывается id активного модального окна
  showModalId: '',
};
const startSlice = createSlice({
  name: 'start',
  initialState,
  reducers: {
    menuVisible: (state) => {
      state.menuVisible = !state.menuVisible;
    },
    showModal: (state, action) => {
      state.showModalId = action.payload;
    },
    startBtnEffect: (state) => {
      state.startBtnEffect = !state.startBtnEffect;
    },
  },
});

const { actions, reducer } = startSlice;
export default reducer;
export const { menuVisible, showModal, startBtnEffect } = actions;

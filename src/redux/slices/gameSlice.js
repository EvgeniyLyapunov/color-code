import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // флаг активности модального окна с вариантами выбора цвета элемента кода
  isChooseColor: false,
  // id элемента поля, куда игрок выбирает свой вариант цвета
  codeItemId: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    chooseColor: (state) => {
      state.isChooseColor = !state.isChooseColor;
    },
    codeItemId: (state, action) => {
      state.codeItemId = action.payload;
    },
  },
});

const { actions, reducer } = gameSlice;
export default reducer;
export const { chooseColor, codeItemId } = actions;

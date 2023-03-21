import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // флаг активности модального окна с вариантами выбора цвета элемента кода
  isChooseColor: false,
  // объект, в котором происходит запись и удаление текущего варианта кода
  usersVariantCode: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  // id элемента поля, куда игрок выбирает свой вариант цвета
  codeItemId: '',
  // id кнопки выбранного цвета
  selectedColorId: '',
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    chooseColor: (state) => {
      state.isChooseColor = !state.isChooseColor;
    },
    usersVariantCode: (state) => {
      state.usersVariantCode = {
        ...state.usersVariantCode,
        ...{ [`${state.codeItemId}`]: `${state.selectedColorId}` },
      };
    },
    codeItemId: (state, action) => {
      state.codeItemId = action.payload;
    },
    selectedColorId: (state, action) => {
      state.selectedColorId = action.payload;
    },
  },
});

const { actions, reducer } = gameSlice;
export default reducer;
export const { chooseColor, codeItemId, selectedColorId, usersVariantCode } =
  actions;

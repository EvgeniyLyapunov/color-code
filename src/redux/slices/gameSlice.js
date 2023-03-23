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
  // флаг готовности кода игрока для проверки
  isCodeReady: false,
  // массив сделанных ходов игрока
  usersMoves: [],
  // массив ответов на ходы игрока
  responsesToUserMoves: [],
  // флаг победы игрока
  isWin: false,
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
    isCodeReady: (state) => {
      state.isCodeReady = !state.isCodeReady;
    },
    usersMoves: (state, action) => {
      state.usersMoves = [...state.usersMoves, action.payload];
      state.usersVariantCode = { first: '', second: '', third: '', fourth: '' };
      state.codeItemId = '';
      state.selectedColorId = '';
    },
    responsesToUserMoves: (state, action) => {
      state.responsesToUserMoves = [
        ...state.responsesToUserMoves,
        action.payload,
      ];
    },
    isWin: (state) => {
      state.isWin = !state.isWin;
    },
  },
});

const { actions, reducer } = gameSlice;
export default reducer;
export const {
  chooseColor,
  codeItemId,
  selectedColorId,
  usersVariantCode,
  isCodeReady,
  usersMoves,
  responsesToUserMoves,
  isWin,
} = actions;

import { createSlice } from '@reduxjs/toolkit';

import chooseGameBg from '../../utils/chooseGameBg';
import chooseFinishWinBg from '../../utils/chooseFinishWinBg';
import generateColorCode from '../../utils/generateColorCode';

const initialState = {
  // переключение модулей
  gameStage: 'start',
  bgGame: '',
  bgFinishWin: '',
  secretCode: {},
};

const globalSlise = createSlice({
  name: 'global',
  initialState,
  reducers: {
    gameStage: (state, action) => {
      state.gameStage = action.payload;
    },
    bgGame: {
      reducer: (state, action) => {
        state.bgGame = action.payload;
      },
      prepare: () => {
        const bg = chooseGameBg();
        return { payload: bg };
      },
    },
    bgFinishWin: {
      reducer: (state, action) => {
        state.bgFinishWin = action.payload;
      },
      prepare: () => {
        const bg = chooseFinishWinBg();
        return { payload: bg };
      },
    },
    secretCode: {
      reducer: (state, action) => {
        state.secretCode = action.payload;
      },
      prepare: () => {
        const code = generateColorCode();
        return { payload: code };
      },
    },
  },
});

const { actions, reducer } = globalSlise;
export default reducer;
export const { gameStage, bgGame, bgFinishWin, secretCode } = actions;

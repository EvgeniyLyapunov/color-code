import { createSlice } from '@reduxjs/toolkit';

import chooseBg from '../../utils/chooseBg';
import generateColorCode from '../../utils/generateColorCode';

const initialState = {
  // переключение модулей
  gameStage: 'start',
  bgGame: '',
  secretCode: {},
  colorsByString: ['red', 'yellow', 'blue', 'green', 'brown'],
  colorsByHash: ['#ff006e', '#ffed66', '#3a86ff', '#16db65', '#d09259'],
  responseByString: ['black', 'white'],
  responseByHash: ['#22223b', '#dee2e6'],
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
        const bg = chooseBg();
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
export const { gameStage, bgGame, secretCode } = actions;

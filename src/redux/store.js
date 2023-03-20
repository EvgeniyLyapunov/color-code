import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import startReducer from './slices/startSlise';
import gameReducer from './slices/gameSlice';

const store = configureStore({
  reducer: { globalReducer, startReducer, gameReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

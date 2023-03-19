import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './slices/globalSlice';
import startReducer from './slices/startSlise';

const store = configureStore({
  reducer: { globalReducer, startReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;

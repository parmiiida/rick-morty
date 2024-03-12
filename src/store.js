import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './features/favoritesSlice.js';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
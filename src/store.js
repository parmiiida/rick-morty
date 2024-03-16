import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './features/favoritesSlice.js';
import searchReducer from './features/searchSlice.js';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    search: searchReducer,
  },
});

export default store;
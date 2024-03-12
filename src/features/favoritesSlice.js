import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('favorites')) || [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      if (!state.some(character => character.id === action.payload.id)) {
        state.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
    removeFavorite: (state, action) => {
      const index = state.findIndex(character => character.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(state));
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = state => state.favorites;

export default favoritesSlice.reducer;
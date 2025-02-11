import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sneakers: [],
};

const sneakersSlice = createSlice({
  name: "sneakers",
  initialState,
  reducers: {
    setSneakers: (state, action) => {
      state.sneakers = action.payload;
    },
    toggleFavorite: (state, action) => {
      state.sneakers.forEach((card) => {
        if (card.id === action.payload) {
          card.isFavorite = !card.isFavorite;
        }
      });
    },
    toggleBasket: (state, action) => {
      state.sneakers.forEach((card) => {
        if (card.id === action.payload) {
          card.toBasket = !card.toBasket;
        }
      });
    },
  },
});

export const { setSneakers, toggleBasket, toggleFavorite } = sneakersSlice.actions;

export default sneakersSlice.reducer;

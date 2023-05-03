import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: 'basket',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id)
      if (!item) {
        return [
          ...state,
          action.payload
        ]
      } else {
        item.quantity += 1
      }
    },
    removeItemById: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
    incrementItemById: (state, action) => {
      const item = state.find((item) => item.id === action.payload)
      item.quantity += 1
    },
    decrementItemById: (state, action) => {
      const item = state.find((item) => item.id === action.payload)
      if (item.quantity > 0) {
        item.quantity -= 1
      }
    }
  }
})

export const {
  addItem,
  removeItemById,
  incrementItemById,
  decrementItemById
} = basketSlice.actions;

export default basketSlice.reducer
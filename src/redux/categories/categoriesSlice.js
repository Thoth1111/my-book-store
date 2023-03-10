import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => [...state, 'Under Construction'],
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;

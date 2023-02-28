import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const { title, author } = action.payload;
      if (title && author) {
        const newBook = { id: uuidv4(), title, author };
        state.push(newBook);
      }
    },
    removeBook: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;

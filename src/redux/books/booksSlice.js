import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYHq60PhLU6lS689Ztsu/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const { data } = await (axios.get(BOOKS_URL));
  return data;
});

export const updateBooks = createAsyncThunk('books/addBook', async (obj) => {
  const { data } = await (axios.post(BOOKS_URL, obj));
  return data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const { data } = await (axios.delete(`${BOOKS_URL}/${id}`));
  return data;
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.books.filter((book) => book.id !== action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, status: 'Loading...' }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const booksArr = [];
        Object.entries(action.payload).map(([key, value]) => {
          const data = value.map((item) => ({ ...item, id: key }));
          booksArr.push(...data);
          /* eslint-disable no-param-reassign */
          state.books = booksArr;
          /* eslint-disable no-param-reassign */
          return state.books;
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => ({ ...state, status: 'Failed', error: action.error.message }))
      .addCase(updateBooks.pending, (state) => ({ ...state, status: 'Loading...' }))
      .addCase(updateBooks.fulfilled, (state) => ({ ...state, status: 'Succeeded' }))
      .addCase(updateBooks.rejected, (state, action) => ({ ...state, status: 'Failed', error: action.error.message }))
      .addCase(removeBook.pending, (state) => ({ ...state, status: 'Loading...' }))
      .addCase(removeBook.fulfilled, (state) => ({ ...state, status: 'Succeeded' }))
      .addCase(removeBook.rejected, (state, action) => ({ ...state, status: 'Failed', error: action.error.message }));
  },
});

export default booksSlice.reducer;

export const { addBook, deleteBook } = booksSlice.actions;

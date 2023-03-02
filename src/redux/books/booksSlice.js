import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/HYHq60PhLU6lS689Ztsu/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await fetch(BOOKS_URL);
  const library = await response.json();
  return library;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await fetch(BOOKS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  const library = await response.json();
  return library;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await fetch(BOOKS_URL, {
    method: 'DELETE',
  });
  const library = await response.json();
  return { id, library };
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => ({ ...state, status: 'Loading...' }))
      .addCase(fetchBooks.fulfilled, (state, action) => ({ ...state, status: 'Succeeded', books: action.payload }))
      .addCase(fetchBooks.rejected, (state, action) => ({ ...state, status: 'Failed', error: action.error.message }))
      .addCase(addBook.pending, (state) => ({ ...state, status: 'Loading...' }))
      .addCase(addBook.fulfilled, (state, action) => ({ ...state, status: 'Succeeded', books: [...state.books, action.payload] }))
      .addCase(addBook.rejected, (state, action) => ({ ...state, status: 'Failed', error: action.error.message }))
      .addCase(removeBook.pending, (state) => ({ ...state, status: 'Loading...' }))
      .addCase(removeBook.fulfilled, (state, action) => ({ ...state, status: 'Succeeded', books: [state.books.filter((book) => book.id !== action.payload.id)] }))
      .addCase(fetchBooks.rejected, (state, action) => ({ ...state, status: 'Failed', error: action.error.message }));
  },
});

export default booksSlice.reducer;

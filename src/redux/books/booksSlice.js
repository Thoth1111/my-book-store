import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  library: [],
};

const booksSlice = createSlice({
  name: 'library',
  initialState,
  reducers: {

  },
});

export default booksSlice;

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook } from './booksSlice';

const Form = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch;
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleAddBook = () => {
    dispatch(addBook({ title: newTitle, author: newAuthor, id: books.length }));
    setNewTitle('');
    setNewAuthor('');
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="author"
          id="author"
          value={newAuthor}
          placeholder="Add Book Author"
        />
        <input
          type="text"
          name="title"
          id="title"
          value={newTitle}
          placeholder="Add Book Title"
        />
        <button
          type="button"
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;

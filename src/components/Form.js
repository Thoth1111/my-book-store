import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, updateBooks, fetchBooks } from '../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setNewTitle] = useState('');
  const [author, setNewAuthor] = useState('');

  const newBook = {
    item_id: uuidv4(),
    title,
    author,
    category: '',
  };

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleAddBook = (obj) => {
    dispatch(addBook(obj));
    dispatch(updateBooks(obj));
    setNewTitle('');
    setNewAuthor('');
    setTimeout(() => {
      dispatch(fetchBooks);
    }, 1000);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={title}
          onChange={handleNewTitleChange}
          placeholder="Add Book Title"
        />
        <input
          type="text"
          name="author"
          id="author"
          required
          value={author}
          onChange={handleNewAuthorChange}
          placeholder="Add Book Author"
        />
        <button
          type="button"
          onClick={handleAddBook(newBook)}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;

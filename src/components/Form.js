import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, updateBooks, fetchBooks } from '../redux/books/booksSlice';
import '../styles/form.css';

const Form = () => {
  const dispatch = useDispatch();
  const [newTitle, setNewTitle] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const handleNewTitleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleNewAuthorChange = (event) => {
    setNewAuthor(event.target.value);
  };

  const handleAddBook = () => {
    const newBook = {
      item_id: uuidv4(),
      title: newTitle,
      author: newAuthor,
      category: '',
    };
    dispatch(addBook(newBook));
    dispatch(updateBooks(newBook));
    setTimeout(() => {
      dispatch(fetchBooks);
    }, 800);
    setNewTitle('');
    setNewAuthor('');
  };

  return (
    <div>
      <h3 id="form-header">ADD NEW BOOK</h3>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          required
          value={newTitle}
          onChange={handleNewTitleChange}
          placeholder="Add Book Title"
        />
        <input
          type="text"
          name="author"
          id="author"
          required
          value={newAuthor}
          onChange={handleNewAuthorChange}
          placeholder="Add Book Author"
        />
        <button
          type="button"
          id="add-btn"
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;

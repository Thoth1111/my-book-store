import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

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
      item_id: uuidv4(), title: newTitle, author: newAuthor, category: '',
    };
    console.log(newBook);
    dispatch(addBook(newBook));
    setNewTitle('');
    setNewAuthor('');
  };

  return (
    <div>
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
          onClick={handleAddBook}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;

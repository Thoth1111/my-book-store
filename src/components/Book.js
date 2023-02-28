import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <tbody className="table_body">
      {books.map((book) => (
        <tr key={book.id}>
          <td>
            {book.title}
            {' '}
            by
            {' '}
            {book.author}
          </td>
          <td>
            <button
              type="button"
              className="remove_btn"
              onClick={() => handleRemoveBook(book.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Book;

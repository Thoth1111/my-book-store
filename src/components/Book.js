import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { fetchBooks, removeBook, deleteBook } from '../redux/books/booksSlice';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/books.css';

const Book = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id));
    dispatch(removeBook(id));
    setTimeout(() => {
      dispatch(fetchBooks());
    }, 800);
  };

  const booksArray = Object.values(books)[0];
  return (
    <>
      {booksArray.map((book) => (
        <section className="each-book" key={book.id}>
          <div className="bk-details">
            <h5 className="entry-category">Category</h5>
            <h3 className="entry-title">{book.title}</h3>
            <h5 className="entry-author">{book.author}</h5>
            <div className="bk-actions">
              <button type="button" className="btn-type1">Comments</button>
              <hr className="vertical line-1" />
              <button
                type="button"
                className="remove_btn btn-type1"
                onClick={() => handleRemoveBook(book.id)}
              >
                Remove
              </button>
              <hr className="vertical line-1" />
              <button type="button" className="btn-type1">Edit</button>
            </div>
          </div>
          <div className="progress-cont">
            <CircularProgressbar />
          </div>
          <div className="stats">
            <span className="percentage">64%</span>
            <br />
            <span className="entry-completed">Completed</span>
          </div>
          <hr className="vertical line-2" />
          <div className="end-section">
            <h4 className="entry-chapter">CURRENT CHAPTER</h4>
            <h4 className="chapt-no">Chapter 17</h4>
            <button type="button" className="btn-type2">UPDATE PROGRESS</button>
          </div>
        </section>
      ))}
    </>
  );
};

export default Book;

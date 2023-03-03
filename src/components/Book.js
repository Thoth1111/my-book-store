import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, removeBook } from '../redux/books/booksSlice';

const Book = () => {
  const books = useSelector((state) => state.books);
  console.log(books);
  const dispatch = useDispatch();
  // const handleRemoveBook = (id) => {
  //   dispatch(removeBook(id));
  //   dispatch(fetchBooks());
  // };

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [dispatch]);

  return (
    <tbody className="table_body">
      <tr>
        <td>
          Book
          {' '}
          by
          {' '}
          Author
        </td>
        <td>
          Category
        </td>
        <td>
          <button
            type="button"
            className="remove_btn"
            // onClick={() => handleRemoveBook(book.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    </tbody>
  );
  //   <tbody className="table_body">
  //     {books.map((book) => (
  //       <tr key={book.id}>
  //         <td>
  //           {book.title}
  //           {' '}
  //           by
  //           {' '}
  //           {book.author}
  //         </td>
  //         {/* <td>
  //           {book.category}
  //         </td> */}
  //         <td>
  //           <button
  //             type="button"
  //             className="remove_btn"
  //             onClick={() => handleRemoveBook(book.id)}
  //           >
  //             Remove
  //           </button>
  //         </td>
  //       </tr>
  //     ))}
  //   </tbody>
  // );
};

export default Book;

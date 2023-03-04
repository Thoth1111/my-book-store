import React from 'react';
import Form from '../components/Form';
import Book from '../components/Book';
import '../styles/books.css';

const Books = () => (
  <section className="books-cont">
    <Book />
    <hr />
    <Form />
  </section>
);

export default Books;

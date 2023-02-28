import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

function Books() {
  return (
    <>
      <table className="table">
        <tbody className="table_body">
          <Book title="A Short History of Nearly Everything" author="Bill Bryson" />
        </tbody>
      </table>
      <Form />
    </>
  );
}

export default Books;

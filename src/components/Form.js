import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <input type="text" name="author" id="author" placeholder="Add Book Author" />
        <input type="text" name="title" id="title" placeholder="Add Book Title" />
        <button type="button">Add Book</button>
      </form>
    </div>
  );
}

export default Form;

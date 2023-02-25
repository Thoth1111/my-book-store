import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;

  return (
    <div>
      <ul>
        <li>
            {title}<br></br>{author}
            <button type="button">Remove</button>
        </li>
      </ul>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
import React from 'react';
import PropTypes from 'prop-types';

function Book(props) {
  const { title, author } = props;

  return (
    <tr>
      <td>
        {title}
        {' '}
        by
        {' '}
        {author}
      </td>
      <td>
        <button type="button" className="remove_btn">
          Remove
        </button>
      </td>
    </tr>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;

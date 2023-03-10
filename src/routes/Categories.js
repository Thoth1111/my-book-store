import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';
import '../styles/books.css';

function Categories() {
  const dispatch = useDispatch();

  return (
    <div className="categ-cont">
      <button
        type="button"
        className="btn-type2"
        onClick={() => dispatch(checkStatus('Under construction'))}
      >
        Check status
      </button>
    </div>
  );
}

export default Categories;

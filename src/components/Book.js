import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books'

const Book = (props) => {
  const { title, author,id } = props;
  const dispatch = useDispatch();
  const remove = (bookToRemove) => {
    dispatch(removeBook({id: bookToRemove}))
  }
  return (
    <div className="book">
      <h1 className="book-author">{author}</h1>
      <h1 className="book-title">{title}</h1>
      <button className="remove_button" type="button" id={id} onClick={(e) => remove(e.target.id)}>Remove</button>
    </div>
  );
};

Book.propTypes = { title: PropTypes.string.isRequired, author: PropTypes.string.isRequired };
export default Book;

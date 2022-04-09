import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);
  return (
    <div className="books_container">
      {bookState.map((book) => (
        <div key={book.id}>
          <Book title={book.title} author={book.author} id={book.id} />

        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default Books;

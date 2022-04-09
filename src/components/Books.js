// import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const Books = () => {
  const bookState = useSelector((state) => state.books);
  const booksToBeDisplayed = bookState.books;
  return (
    <div className="books_container">
      {/* {bookState.map((book) => ( */}
      {(bookState.loading === false) ? booksToBeDisplayed[0].map((books) => (
        <div key={book.id}>
          <Book title={book.title} author={book.author} id={book.id} />
        </div>
      )): <h1>****Loading****</h1>}
      <AddBook />
    </div>
  );
};

export default Books;

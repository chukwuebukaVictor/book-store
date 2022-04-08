import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

// const BookToBeDisplayed = {
//   title: 'Book1',
//   author: 'Author1',
// };

const Books = () => {
  // const { title, author } = BookToBeDisplayed
  const bookState = useSelector(state => state.books)
  return (
    <div className="books_container">
      {bookState.map(book => (
        <div key={book.id}>
          <Book title={book.title} author={book.author} id={book.id} />

        </div>
      ))}
      <AddBook />
    </div>
  );
};

export default Books;

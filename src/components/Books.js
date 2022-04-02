import React from 'react';
import Book from './Book';
import AddBook from './AddBook';

const BookToBeDisplayed = {
  title: 'Book1',
  author: 'Author1',
};

const Books = () => {
  const { title, author } = BookToBeDisplayed;
  return (
    <div className="books_container">
      <Book title={title} author={author} />
      <AddBook />
    </div>
  );
};

export default Books;

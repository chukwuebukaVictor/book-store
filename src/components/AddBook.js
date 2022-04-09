import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import bookStore from '../redux/configureStore';

const AddBook = () => {
  const [input, setInput] = useState({
    title: '',
    author: '',
  });

  const onChangeTitle = (e) => {
    setInput({
      ...input,
      title: e.target.value,
    });
  };

  const onChangeAuthor = (e) => {
    setInput({
      ...input,
      author: e.target.value,
    });
  };
  const dispatch = useDispatch();
  const submitBook = (e) => {
    e.preventDefault();
    const submittedBook = {
      id: bookStore.getState().books.length,
      author: input.author,
      title: input.title,
    };
    dispatch(addBook(submittedBook));
    input.author = '';
    input.title = '';
  };
  return (
    <div className="add-book">
      <form onSubmit={(e) => submitBook(e)}>
        <input className="author" placeholder="Author name" value={input.author} onChange={(e) => onChangeAuthor(e)} required />
        <input className="title" placeholder="Book title" value={input.title} onChange={(e) => onChangeTitle(e)} required />
        <button className="add-button" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBook;

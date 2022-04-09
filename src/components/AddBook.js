import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/books';

const AddBook = () => {
  const [input, setInput] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Check',
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
      id: uuidv4(),
      author: input.author,
      title: input.title,
      category: 'Check',
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

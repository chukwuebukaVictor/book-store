const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';


const initialState = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
  },
];

export function addBook(book) {
  return {
    type: ADD_BOOK,
    payload: book,
  };
}

export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    payload: id,
  };
}

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK: return [
      ...state,
      {
        id: state.length,
        title: action.payload.title,
        author: action.payload.author,
      },
    ];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.payload.id);
    default: return state;
  }
};

export default bookReducer;

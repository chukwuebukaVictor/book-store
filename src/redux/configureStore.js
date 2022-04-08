import { createStore, combineReducers } from 'redux';
import bookReducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer,
});

const bookStore = createStore(rootReducer);

export default bookStore;

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookReducer, { getBooks } from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  status: checkStatusReducer,
});

const bookStore = createStore(rootReducer, applyMiddleware(thunk));
bookStore.dispatch(getBooks());

export default bookStore;

import {createStore, applyMiddleware} from 'redux'
import {combineReducers} from 'redux'
import bookReducer from './books/bookReducer'
import checkStatusReducer from './categories/checkStatusReducer'

const rootReducer = combineReducers({
  book: bookReducer,
	status: checkStatusReducer
})

const store = createStore(rootReducer(applyMiddleware()))

export default store;
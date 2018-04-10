import reducer from './reducer';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';

export default createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
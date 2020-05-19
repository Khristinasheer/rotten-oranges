import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as Reducers from './reducers/index'

const middlewares = [
  thunk, logger
]

const rootReducer = combineReducers({
  ...Reducers
});

export default () =>  createStore(rootReducer, applyMiddleware(...middlewares))
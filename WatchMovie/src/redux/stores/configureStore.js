import {applyMiddleware, createStore, Middleware, compose} from 'redux';
import rootReducer from '../reducers';

export default function configureStore(sagaMiddleware) {
  return createStore(rootReducer, applyMiddleware(sagaMiddleware));
}

import {combineReducers} from 'redux';
import myMovieReducers from './myMovieReducers';

import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
const rootReducers = combineReducers({
  myMovieReducers,
});

export const useSelector = useReduxSelector;
export default rootReducers;

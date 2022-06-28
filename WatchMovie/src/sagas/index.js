import {all, fork} from 'redux-saga/effects';

import {watchFetchMovieAction} from './movieActionSaga';
export default function* rootSaga() {
  yield all([watchFetchMovieAction()]);
}

import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import _ from 'lodash';
import unAuthorizedRequest from '../services/api-service/unAuthorizedRequest';


const getMovie = async () => {
  return await unAuthorizedRequest.get(
    '3/movie/5/lists?api_key=c9238e9fff997ddc12fc76e3904e2618&language=en-US&page=3', 
)};
const getMovieDetail = async id => {
  return await unAuthorizedRequest.get(
    `https://api.themoviedb.org/3/movie/${id}`,
    {},
    {api_key: 'c9238e9fff997ddc12fc76e3904e2618', language: 'en-US'},
  );
};

function* myActivity(item, index) {
  const dataDetail = yield call(getMovieDetail, item?.item_count); 
  if (dataDetail?.id) {
    yield put({
      type: 'GET_MOVIE_DETAIL', 
      data: dataDetail?.id ? dataDetail : {},
    });
  }
  return dataDetail?.id ? dataDetail : {};
}
function* myActivityAPI() {
  var data = yield call(getMovie);
  yield put({
    type: 'GET_MOVIE_DATA',
    data: data?.results ?? [],
  });
  const dataConfig = (data?.results ?? []).map((item, index) =>
    myActivity(item, index),
  );
  for (var item of dataConfig) {
    yield item;
  }
}

export function* watchFetchMovieAction() {
  yield takeLatest('GET_MOVIE', myActivityAPI);
}

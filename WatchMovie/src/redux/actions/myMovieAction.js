function getMovieSuccess() {
  return {
    type: 'GET_MOVIE',
  };
}
function getMovieSuccessData(data) {
  return {
    type: 'GET_MOVIE_DATA',
    data: data,
  };
}
function getMovieSuccessDataDetail(data) {
  return {
    type: 'GET_MOVIE_DETAIL',
    data: data,
  };
}
function getMovieFail() {
  return {
    type: 'GET_MOVIE_FAIL',
  };
}
export {getMovieSuccess, getMovieFail};

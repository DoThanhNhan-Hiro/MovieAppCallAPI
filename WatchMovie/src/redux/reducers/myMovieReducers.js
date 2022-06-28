const defaultState = {

  dataMovie: [],
  dataDetail: [],
  isLoading: false,
};
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_DATA': {
      return {
        ...state,
        dataMovie: action.data,
      };
    }
    case 'GET_MOVIE': {
      return {
        ...state,
      };
    }
    case 'GET_MOVIE_DETAIL': {
      const dataDetail1 = state?.dataDetail.push(action?.data);
      return {
        ...state,
      };
    }
    case 'GET_MOVIE_FAIL': {
      return {
        ...state,
        dataMovie: [],
      };
    }
    default:
      break;
  }
  return state;
};

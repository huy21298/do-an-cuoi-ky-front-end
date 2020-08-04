import { GET_LOADING, SET_LOADING } from '../actions/loading.action';

export const init = false

export const loadingReducer = (state = init, { type, loading }) => {
  switch (type) {
    case GET_LOADING: {
      return state;
    }
    case SET_LOADING: {
      return loading;
    }
    default:
      return state;
  }
};
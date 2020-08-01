import { GET_LOADING, SET_LOADING } from '../actions/loading.action';

export const initLoading = false

export const loadingReducer = (state = initLoading, { type, loading }) => {
  switch (type) {
    case GET_LOADING: {
      return state;
    }
    case SET_LOADING: {
      state = loading;
      return state;
    }
    default:
      return state;
  }
};
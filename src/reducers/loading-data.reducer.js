import { GET_LOADING_DATA, SET_LOADING_DATA } from '../actions/loading-data.action';

export const init = false

export const loadingDataReducer = (state = init, { type, loading }) => {
  switch (type) {
    case GET_LOADING_DATA: {
      return state;
    }
    case SET_LOADING_DATA: {
      return loading;
    }
    default:
      return state;
  }
};
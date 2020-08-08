import { GET_LOADING_HEADER, SET_LOADING_HEADER } from "../actions/loading-header-classroom.action";

export const init = false

export const loadingHeaderReducer = (state = init, { type, loading }) => {
  switch (type) {
    case GET_LOADING_HEADER: {
      return state;
    }
    case SET_LOADING_HEADER: {
      return loading;
    }
    default:
      return state;
  }
};
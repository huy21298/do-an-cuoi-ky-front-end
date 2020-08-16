import { GET_IS_DISPLAY_HEADER, SET_IS_DISPLAY_HEADER } from '../actions/display-header.action';

export const init = false

export const displayHeaderReducer = (state = init, { type, display }) => {
  switch (type) {
    case GET_IS_DISPLAY_HEADER: {
      return state;
    }
    case SET_IS_DISPLAY_HEADER: {
      return display;
    }
    default:
      return state;
  }
};
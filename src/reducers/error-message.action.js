import { GET_MESSAGE, SET_MESSAGE } from '../actions/error-message.action';

export const init = "";

export const classesReducer = (state = init, { type, message }) => {
  switch (type) {
    case GET_MESSAGE: {
      return state;
    }
    case SET_MESSAGE: {
      state = message;
      return state;
    }
    default:
      return state;
  }
};
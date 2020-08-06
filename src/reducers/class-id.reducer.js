import { GET_ID_CLASS, SET_ID_CLASS } from '../actions/class-id.action';

export const init = ""

export const classIDReducer = (state = init, { type, id }) => {
  switch (type) {
    case GET_ID_CLASS: {
      return state;
    }
    case SET_ID_CLASS: {
      return id;
    }
    default:
      return state;
  }
};
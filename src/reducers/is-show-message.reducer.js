import { GET_IS_SHOW, SET_IS_SHOW } from "../actions/is-show-message.action.js";

export const init = false

export const isShowMessageReducer = (state = init, { type, isShow }) => {
  switch (type) {
    case GET_IS_SHOW: {
      return state;
    }
    case SET_IS_SHOW: {
      return isShow
    }
    default:
      return state;
  }
};

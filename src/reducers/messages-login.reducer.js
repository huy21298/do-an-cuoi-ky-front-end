import { GET_MESSAGES, SET_MESSAGES } from '../actions/message-login.action';

export const initMessages = [{
  msg: "",
  param: ""
}]

export const messagesLoginReducer = (state = initMessages, { type, messages }) => {
  switch (type) {
    case GET_MESSAGES: {
      return state;
    }
    case SET_MESSAGES: {
      state = messages;
      return state;
    }
    default:
      return state;
  }
};
export const GET_MESSAGE = "GET_MESSAGE";
export const SET_MESSAGE = "SET_MESSAGE";

export const actGetMessage = () => ({ type: GET_MESSAGE });

export const actSetMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});

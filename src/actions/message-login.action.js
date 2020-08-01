export const GET_MESSAGES = "GET_MESSAGES";
export const SET_MESSAGES = "SET_MESSAGES";

export const actGetMessages = () => ({ type: GET_MESSAGES });

export const actSetMessages = (messages) => ({
  type: SET_MESSAGES,
  messages,
});

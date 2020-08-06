export const GET_ID_CLASS = "GET_ID_CLASS";
export const SET_ID_CLASS = "SET_ID_CLASS";

export const actGetIDClass = () => ({ type: GET_ID_CLASS });

export const actSetIDClass  = (id) => ({
  type: SET_ID_CLASS,
  id,
});

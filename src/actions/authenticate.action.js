export const GET_IS_AUTHENTICATE = "GET_IS_AUTHENTICATE";
export const SET_IS_AUTHENTICATE = "SET_IS_AUTHENTICATE";

export const actGetAuthenticate = () => ({ type: GET_IS_AUTHENTICATE });

export const actSetAuthenticate = (authenticate) => ({
  type: SET_IS_AUTHENTICATE,
  authenticate,
});

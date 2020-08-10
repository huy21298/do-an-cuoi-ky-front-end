export const GET_IS_SHOW = "GET_IS_SHOW";
export const SET_IS_SHOW = "SET_IS_SHOW";

export const actGetIsShowMessage = () => ({ type: GET_IS_SHOW });

export const actSetIsShowMessage = (isShow) => ({
  type: SET_IS_SHOW,
  isShow,
});

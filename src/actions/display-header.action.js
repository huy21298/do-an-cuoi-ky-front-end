export const GET_IS_DISPLAY_HEADER = "GET_IS_DISPLAY_HEADER";
export const SET_IS_DISPLAY_HEADER = "SET_IS_DISPLAY_HEADER";

export const actGetIsDisplayHeader = () => ({ type: GET_IS_DISPLAY_HEADER });

export const actSetIsDisplayHeader = (display) => ({
  type: SET_IS_DISPLAY_HEADER,
  display,
});

export const GET_IS_DISPLAY_TAB = "GET_IS_DISPLAY_TAB";
export const SET_IS_DISPLAY_TAB = "SET_IS_DISPLAY_TAB";

export const actGetIsDisplayTab = () => ({ type: GET_IS_DISPLAY_TAB });

export const actSetIsDisplayTab = (display) => ({
  type: SET_IS_DISPLAY_TAB,
  display,
});

import { GET_IS_DISPLAY_TAB, SET_IS_DISPLAY_TAB } from '../actions/display-tab-navigation.action';

export const init = false

export const displayTabNavigationReducer = (state = init, { type, display }) => {
  switch (type) {
    case GET_IS_DISPLAY_TAB: {
      return state;
    }
    case SET_IS_DISPLAY_TAB: {
      state = display;
      return state;
    }
    default:
      return state;
  }
};
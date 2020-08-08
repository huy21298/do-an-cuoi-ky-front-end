import { GET_CODE, SET_CODE } from "../actions/error-test.action";

export const init = {
  code: "",
  time: 0
}

export const errorTestReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CODE: {
      return state;
    }
    case SET_CODE: {
      return payload
    }
    default:
      return state;
  }
};

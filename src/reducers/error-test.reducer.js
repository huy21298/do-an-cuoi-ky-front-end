import { GET_CODE, SET_CODE } from "../actions/error-test.action";

export const init = {
  code: "",
  time: 0,
  nagy_thi: {ngay: "00", thang: "00", ngay: "00", nam: "00"}
}

export const errorTestReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CODE: {
      return state;
    }
    case SET_CODE: {
      console.log('payload', payload);
      return payload
    }
    default:
      return state;
  }
};

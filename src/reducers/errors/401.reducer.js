import { GET_ERRRO_401, SET_ERROR_401 } from "../../actions/errors/401.action";

export const init = {
  msg: "",
  active: false
};

export const error401Reducer = (state = init, { type, error }) => {
  switch (type) {
    case GET_ERRRO_401: {
      return state;
    }
    case SET_ERROR_401: {
      return {...error, active: true};
    }
    default:
      return state;
  }
};

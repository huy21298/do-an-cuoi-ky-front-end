import { GET_ERRRO_500, SET_ERROR_500 } from "../../actions/errors/500.action";

export const init = {
  msg: ""
}

export const error500Reducer = (state = init, { type, error }) => {
  switch (type) {
    case GET_ERRRO_500: {
      return state;
    }
    case SET_ERROR_500: {
      return error;
    }
    default:
      return state;
  }
};

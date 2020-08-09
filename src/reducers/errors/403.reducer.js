import { GET_ERRRO_403, SET_ERROR_403 } from "../../actions/errors/403.action";

export const init = {
  errors: [{ msg: "", param: "" }]
};

export const error403Reducer = (state = init, { type, error }) => {
  switch (type) {
    case GET_ERRRO_403: {
      return state;
    }
    case SET_ERROR_403: {
      console.log('error', error)
      return error;
    }
    default:
      return state;
  }
};

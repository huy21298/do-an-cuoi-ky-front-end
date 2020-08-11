import { actSetError403 } from "./errors/403.action";
import { actSetError500 } from "./errors/500.action";
import { actSetError401 } from "./errors/401.action";

export const dispatchError = (code, errors, dispatch) => {
  const list = {
    401: actSetError401,
    402: actSetError403,
    403: actSetError403,
    500: actSetError500,
  };
  if (code) {
    dispatch(list[code](errors));
  } else {
    dispatch(actSetError500({ msg: "Có lỗi xãy ra, mời thử lại sau" }));
  }
};

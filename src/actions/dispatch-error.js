import { actSetError403 } from './errors/403.action';
import { actSetError500 } from './errors/500.action';
import { actSetError401 } from './errors/401.action';

export const dispatchError = (code, errors, dispatch) => {
  const list = {
    401: actSetError401,
    403: actSetError403,
    500: actSetError500
  }
  dispatch(list[code](errors) || list[500]({ msg: "Có lỗi xãy ra, mời thử lại sau"}))
}
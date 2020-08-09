import AxiosService from "../services/axios.service";
import { actSetLoading } from './loading.action';
import { actSetAuthenticate } from './authenticate.action';
import { dispatchError } from './dispatch-error';

export const GET_TOKEN = "GET_TOKEN";
export const SET_TOKEN = "SET_TOKEN";
export const RESET_TOKEN = "RESET_TOKEN";

export const actGetTokenFromLocal = () => ({ type: GET_TOKEN });

export const actSetTokenToLocal = (authenticate) => ({
  type: SET_TOKEN,
  authenticate,
});

export const actResetToken = () => ({ type: RESET_TOKEN})

export const actSetTokenToLocalReq = (payload) => (dispatch) => {
  dispatch(actSetLoading(true));
  AxiosService.post("/v1/dang-nhap", payload)
  .then((res) => {
    dispatch(actSetTokenToLocal(res.data));
    dispatch(actSetLoading(false));
    dispatch(actSetAuthenticate(true))
  })
  .catch((error) => {
    console.log('error', error);
    dispatch(actSetLoading(false));
    dispatchError(error.status, error.data, dispatch)
  })
  .finally(() => {
    dispatch(actSetLoading(false));
  });
}



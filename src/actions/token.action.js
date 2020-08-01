import AxiosService from "../services/axios.service";
import { actSetMessages } from './message-login.action';
import { actSetLoading } from './loading.action';
import { actSetAuthenticate } from './authenticate.action';

export const GET_TOKEN = "GET_TOKEN";
export const SET_TOKEN = "SET_TOKEN";

export const actGetTokenFromLocal = () => ({ type: GET_TOKEN });

export const actSetTokenToLocal = (authenticate) => ({
  type: SET_TOKEN,
  authenticate,
});

export const actSetTokenToLocalReq = (payload) => (dispatch) => {
  dispatch(actSetLoading(true));
  AxiosService.post("/v1/dang-nhap", payload)
  .then((res) => {
    dispatch(actSetTokenToLocal(res.data));
    dispatch(actSetLoading(false));
    dispatch(actSetAuthenticate(true))
  })
  .catch((error) => {
    dispatch(actSetMessages(error.data.errors));
    dispatch(actSetLoading(false));
  });
}

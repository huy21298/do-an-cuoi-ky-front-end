import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_INFO_SEND = "GET_INFO_SEND";
export const SET_INFO_SEND = "SET_INFO_SEND";
export const UPDATE_INFO_SEND = "UPDATE_INFO_SEND";

const { token } = getTokenFromLocal();

export const actGetInfoSend = () => ({ type: GET_INFO_SEND });

export const actSetInfoSend = (info) => ({ type: SET_INFO_SEND, payload: { info } });

export const actUpdateInfoSend = (info) => ({ type: UPDATE_INFO_SEND, payload: { info } });

export const actSetInfoReq = () => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth("/v1/sinh-vien", token);
    if (data.success) {
      dispatch(actSetInfoSend(data.data.thongTinSinhVien));
      dispatch(actSetLoading(false));
    }
  } catch (error) {
    dispatch(actSetLoading(false));
    console.log("error", error);
    dispatchError(error.status, error.data, dispatch);
  } finally {
    dispatch(actSetLoading(false));
  }
};

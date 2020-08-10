import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";

import { actSetLoading } from "./loading.action";
import { actSetInfoSend } from "./info-send.action";
import { dispatchError } from "./dispatch-error";

export const GET_INFO = "GET_INFO";
export const SET_INFO = "SET_INFO";

const { token } = getTokenFromLocal();

export const actGetInfo = () => ({ type: GET_INFO });

export const actSetInfo = (info) => ({ type: SET_INFO, payload: { info } });

export const actSetInfoReq = () => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth("/v1/sinh-vien", token);
    if (data.success) {
      dispatch(actSetInfo(data.data.thongTinSinhVien));
      dispatch(actSetInfoSend(data.data.thongTinSinhVien));
      dispatch(actSetLoading(false));
    }
  } catch (error) {
    console.log('error', error);
    if (error?.status) {
      dispatch(actSetLoading(false));
      dispatchError(error.status, error.data, dispatch)
    }
  } finally {
    dispatch(actSetLoading(false));
  }
};

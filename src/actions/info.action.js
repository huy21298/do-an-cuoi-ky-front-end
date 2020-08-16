import AxiosService from "../services/axios.service";

import { actSetLoading } from "./loading.action";
import { actSetInfoSend } from "./info-send.action";
import { dispatchError } from "./dispatch-error";
import { actSetLoadingData } from './loading-data.action';

export const GET_INFO = "GET_INFO";
export const SET_INFO = "SET_INFO";
export const CHANGE_AVATAR = "CHANGE_AVATAR";

export const actGetInfo = () => ({ type: GET_INFO });

export const actSetInfo = (info) => ({ type: SET_INFO, payload: { info } });

export const actChangeAvatar = (anh_dai_dien) => ({ type: CHANGE_AVATAR, payload: { anh_dai_dien } });

export const actSetInfoReq = (token) => async (dispatch) => {
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

export const actChangeAvatarReq = (avatar, token) => async (dispatch) => {

  try {
    dispatch(actSetLoadingData(true));
    const { data } = await AxiosService.postAuth("/v1/sinh-vien/cap-nhat-avatar", avatar, token);
    if (data.success) {
      dispatch(actSetLoadingData(false));
      dispatch(actChangeAvatar(data.anh_dai_dien));
    }
  } catch (error) {
    console.log('error', error);
    if (error?.status) {
      dispatch(actSetLoadingData(false));
      dispatchError(error.status, error.data, dispatch)
    }
  } finally {
    dispatch(actSetLoadingData(false));
  }
}

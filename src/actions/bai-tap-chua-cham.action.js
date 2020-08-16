import AxiosService from "../services/axios.service";
import { actSetLoadingData } from "./loading-data.action";
import { dispatchError } from "./dispatch-error";
export const GET_BAI_TAP_CHUA_CHAM = "GET_BAI_TAP_CHUA_CHAM";
export const SET_BAI_TAP_CHUA_CHAM = "SET_BAI_TAP_CHUA_CHAM";

export const actGetBaiTap = () => ({ type: GET_BAI_TAP_CHUA_CHAM});
export const actSetBaiTap = (baiTap) => ({ type: SET_BAI_TAP_CHUA_CHAM, payload: { baiTap }});

export const actGetBaiTapReq = (lop_hoc_id, bai_tap_id, token) => async dispatch => {

  try {
    dispatch(actSetLoadingData(true));
    const { data } = await AxiosService.postAuth("v1/bai-tap/ct-bai-tap-da-nop", {lop_hoc_id, bai_tap_id}, token);
    if (data.success) {
      dispatch(actSetBaiTap(data.data));
      dispatch(actSetLoadingData(false));
    }
  } catch (error) {
    if (error?.status) {
      dispatch(actSetLoadingData(false));
      dispatchError(error.status, error.data, dispatch);
    }
  } finally {
    dispatch(actSetLoadingData(false));
  }

}

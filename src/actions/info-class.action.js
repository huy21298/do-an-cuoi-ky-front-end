import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";
import { actSetLoadingHeader } from "./loading-header-classroom.action";
import { actSetIDClass } from "./class-id.action";
import { dispatchError } from "./dispatch-error";

export const GET_INFO_CLASS = "GET_INFO_CLASS";

const { token } = getTokenFromLocal();

const actGetInfoClass = (info) => ({ type: GET_INFO_CLASS, info });

export const actGetInfoClassReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoadingHeader(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/thong-tin-lop-hoc`,
      token
    );
    if (data.success) {
      dispatch(actGetInfoClass(data.lop_hoc));
      dispatch(actSetIDClass(data.lop_hoc._id))
      dispatch(actSetLoadingHeader(false));
    }
  } catch (error) {
    console.log("error", error);
    dispatchError(error.status, error.data, dispatch);
  } finally {
    dispatch(actSetLoadingHeader(false));
  }
};

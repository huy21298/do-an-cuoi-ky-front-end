import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";
import { actSetLoadingHeader } from "./loading-header-classroom.action";
import { actSetIDClass } from "./class-id.action";

export const GET_INFO = "GET_INFO";

const { token } = getTokenFromLocal();

const actGetInfoClass = (info) => ({ type: GET_INFO, info });

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
  } catch {
    dispatch(actSetLoadingHeader(false));
  } finally {
    dispatch(actSetLoadingHeader(false));
  }
};

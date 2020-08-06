import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";
import { actSetLoading } from "./loading.action";
import { actSetIDClass } from "./class-id.action";

export const GET_INFO = "GET_INFO";

const { token } = getTokenFromLocal();

const actGetInfoClass = (info) => ({ type: GET_INFO, info });

export const actGetInfoClassReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/thong-tin-lop-hoc`,
      token
    );
    if (data.success) {
      dispatch(actGetInfoClass(data.lop_hoc));
      dispatch(actSetIDClass(data.lop_hoc._id))
      dispatch(actSetLoading(false));
    }
  } catch {
    dispatch(actSetLoading(false));
  } finally {
    dispatch(actSetLoading(false));
  }
};

import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_EXAM = "GET_EXAM";
export const GET_EXAM_FINISH = "GET_EXAM_FINISH";

const { token } = getTokenFromLocal();

const actGetExams = (exam) => ({ type: GET_EXAM, exam });

export const actGetExamsReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/bai-thi`,
      token
    );
    if (data.success) {
      dispatch(actGetExams(data.bai_thi));
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

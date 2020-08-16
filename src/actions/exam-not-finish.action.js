import AxiosService from "../services/axios.service";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_EXAM_NOT_FINISH = "GET_EXAM_NOT_FINISH";

const actGetExamsNotFinish = (exam) => ({ type: GET_EXAM_NOT_FINISH, exam });

export const actGetExamsNotFinishReq = (id_lop_hoc, token) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id_lop_hoc}/bai-thi-khong-hoan-thanh`,
      token
    );
    if (data.success) {
      dispatch(actGetExamsNotFinish(data.bai_thi))
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

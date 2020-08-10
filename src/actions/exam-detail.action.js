import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";

import { actSetLoading } from "./loading.action";
import { actSetCode } from "./error-test.action";
import { actSetExamTime } from './exam-time.action';

import { dispatchError } from "./dispatch-error";

export const GET_EXAM_DETAIL = "GET_EXAM_DETAIL";

const { token } = getTokenFromLocal();

const actGetExam = (exam) => ({ type: GET_EXAM_DETAIL, exam });

export const actGetExamReq = (id_bai_thi) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/bai-thi/chi-tiet-bai-thi/${id_bai_thi}`,
      token
    );
    if (data.success) {
      dispatch(actGetExam(data.data.bai_thi));
      dispatch(actSetLoading(false));
      dispatch(actSetCode({ code: "NONE" }));
      dispatch(actSetExamTime(data.data.bai_thi.thoi_gian_thi))
    } else {
      const { code, thoi_gian_con_lai } = data;
      const payload = { code, time: thoi_gian_con_lai };
      dispatch(actSetCode(payload));
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

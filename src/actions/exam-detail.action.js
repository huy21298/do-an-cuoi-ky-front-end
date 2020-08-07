import AxiosService from '../services/axios.service';
import { getTokenFromLocal } from '../reducers/token.reducer';

import { actSetLoading } from "./loading.action";

export const GET_EXAM_DETAIL = "GET_EXAM_DETAIL";

const { token } = getTokenFromLocal();

const actGetExam = (exam) => ({ type: GET_EXAM_DETAIL, exam });

export const actGetExamReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(`/v1/bai-thi/${id}`, token);
    if (data.success) {
      dispatch(actGetExam(data.data.bai_thi));
      dispatch(actSetLoading(false));
    }
  } catch (e) {

  } finally {
    dispatch(actSetLoading(false));
  }
}
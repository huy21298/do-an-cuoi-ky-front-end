import AxiosService from '../services/axios.service';
import { getTokenFromLocal } from '../reducers/token.reducer';

import { actSetLoading } from "./loading.action";

export const GET_EXAM = "GET_EXAM";

const { token } = getTokenFromLocal();

const actGetExams = (exam) => ({ type: GET_EXAM, exam });

export const actGetExamsReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(`/v1/lop-hoc/${id}/bai-thi`, token);
    if (data.success) {
      dispatch(actGetExams(data.bai_thi));
      dispatch(actSetLoading(false));
    }
  } catch (e) {

  } finally {
    dispatch(actSetLoading(false));
  }
}
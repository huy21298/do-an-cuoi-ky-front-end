import AxiosService from '../services/axios.service';
import { getTokenFromLocal } from '../reducers/token.reducer';

import { actSetLoading } from "./loading.action";

export const GET_EXAM_IS_SEND = "GET_EXAM_IS_SEND";
export const SET_EXAM_IS_SEND = "SET_EXAM_IS_SEND";
export const SEND_EXAM = "SET_EXAM";

const { token } = getTokenFromLocal();

export const actGetExamSend = () => ({ type: GET_EXAM_IS_SEND });

export const actSetExamSend = (question) => ({ type: SET_EXAM_IS_SEND, payload: { question } });

export const actSendExamReq = (exam) => async (dispatch) => {
  try {
    // const { data } = await AxiosService.postAuth("/v1/api/bai-thi/nop-bai", exam, token);
  } catch (e) {
    console.error("e", e);
  } finally {

  }
}
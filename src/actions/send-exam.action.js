import AxiosService from '../services/axios.service';
import { getTokenFromLocal } from '../reducers/token.reducer';

import { actSetLoading } from "./loading.action";

export const GET_EXAM_IS_SEND = "GET_EXAM_IS_SEND";
export const SET_EXAM_IS_SEND = "SET_EXAM_IS_SEND";
export const SEND_EXAM = "SET_EXAM";
export const CHANGE_EXAM_SEND = "CHANGE_EXAM_SEND";

const { token } = getTokenFromLocal();

export const actGetExamSend = () => ({ type: GET_EXAM_IS_SEND });

export const actSetExamSend = (question) => ({ type: SET_EXAM_IS_SEND, payload: { question } });

export const actChangeExamSend = (questions) => ({type: CHANGE_EXAM_SEND, payload: { questions }})
export const GET_EXAM_TIME = "GET_EXAM_TIME";
export const SET_EXAM_TIME = "SET_EXAM_TIME";
export const DECRESE_TIME = "DECRESE_TIME";

export const actGetExamTime = () => ({ type: GET_EXAM_TIME });
export const actSetExamTime = (time) => ({ type: SET_EXAM_TIME, time});
export const actDecreaseExamTime = (time) => ({ type: DECRESE_TIME, time});
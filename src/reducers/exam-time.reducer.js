import { GET_EXAM_TIME, SET_EXAM_TIME,  DECRESE_TIME} from '../actions/exam-time.action';

export const init = 0

export const examTimeReducer = (state = init, { type, time }) => {
  switch (type) {
    case GET_EXAM_TIME: {
      return state;
    }
    case SET_EXAM_TIME: {
      return time * 60;
    }
    case DECRESE_TIME: {
      return time;
    }
    default:
      return state;
  }
};
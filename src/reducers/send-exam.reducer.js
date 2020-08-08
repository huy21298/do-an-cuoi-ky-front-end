import { GET_EXAM_IS_SEND, SET_EXAM_IS_SEND, SEND_EXAM } from '../actions/send-exam.action.js';

export const init = [];

const getIndex = (questions, id) => {
  return questions.findIndex(item => item.cau_hoi_id === id)
};

export const sendExamReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_EXAM_IS_SEND: {
      return state;
    }
    case SET_EXAM_IS_SEND: {
      const { question } = payload;
      const index = getIndex(state, question.cau_hoi_id);
      if (state.length <= 0) {
        state.push(question);
      } else if (index === -1) {
        state.push(question);
      } else {
        state[index] = question;
      }
      return state;
    }
    case SEND_EXAM: {
      return state;
    }
    default:
      return state;
  }
};


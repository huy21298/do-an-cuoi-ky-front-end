import { GET_EXAM_IS_SEND, SET_EXAM_IS_SEND, SEND_EXAM, CHANGE_EXAM_SEND } from '../actions/send-exam.action.js';

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
      console.log('state', state);
      const index = getIndex(state, question.cau_hoi_id);
      if (state.length <= 0) {
        state.push(question);
      } else if (index === -1) {
        state.push(question);
      } else {
        state[index] = question;
      }
      console.log('state', state)
      return state;
    }
    case SEND_EXAM: {
      return state;
    }
    case CHANGE_EXAM_SEND: {
      const { questions } = payload;
      questions.forEach(item => {
        const { _id: cau_hoi_id} = item.cau_hoi_id;
        const { loai } = item;
        const dap_an = "-999";
        state.push({cau_hoi_id, loai, dap_an});
      })
      return state;
    }
    default:
      return state;
  }
};


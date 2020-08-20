import { GET_EXERCISES, SEND_EXERCISE } from '../actions/exercises.action.js';

export const init = [{
  _id: "",
  tieu_de: "",
  han_nop_bai: "",
  noi_dung: "",
  anh_dai_dien: "",
  han_nop_bai_format: "",
  tieu_de_format: "",
}];

const findIndex = (baiTap, id) => baiTap.findIndex(item => item.id === id);

export const exercisesReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_EXERCISES: {
      return payload.exercises;
    }
    case SEND_EXERCISE: {
      const { id } = payload;
      const index = findIndex(state, id);
      const newState = [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
      return newState;
    }
    default:
      return state;
  }
};
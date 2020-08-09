import { GET_EXERCISES } from '../actions/exercises.action.js';

export const init = [{
  _id: "",
  tieu_de: "",
  han_nop_bai: "",
  noi_dung: "",
  anh_dai_dien: "",
  han_nop_bai_format: "",
}]

export const exercisesReducer = (state = init, { type, exercises }) => {
  switch (type) {
    case GET_EXERCISES: {
      return exercises;
    }
    default:
      return state;
  }
};
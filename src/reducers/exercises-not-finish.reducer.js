import { GET_EXERCISES_NOT_FINISH } from "../actions/exercises-not-finish.action.js";

export const init = [
  {
    _id: "",
    tieu_de: "",
    noi_dung: "",
    han_nop_bai_format: "",
    trang_thai_format: "",
    tieu_de_format: ""
  },
];

export const exercisesNotFinishReducer = (
  state = init,
  { type, exercises }
) => {
  switch (type) {
    case GET_EXERCISES_NOT_FINISH: {
      return exercises;
    }
    default:
      return state;
  }
};

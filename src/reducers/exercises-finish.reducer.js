import { GET_EXERCISES_FINISH } from "../actions/exercises-finish.action.js";

export const init = [
  {
    da_cham_diem: false,
    _id: "",
    bai_tap_id: {
      _id: "",
      tieu_de: "",
      noi_dung: "",
      han_nop_bai_format: "",
      trang_thai_format: "",
      id: "",
    },
    id: "",
  },
];

export const exercisesFinishReducer = (state = init, { type, exercises }) => {
  switch (type) {
    case GET_EXERCISES_FINISH: {
      return exercises;
    }
    default:
      return state;
  }
};

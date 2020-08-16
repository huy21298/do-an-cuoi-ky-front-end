import { GET_EXERCISES_FINISH, DELETE_BAI_TAP } from "../actions/exercises-finish.action.js";

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

const findIndex = (baiTap, id) => baiTap.findIndex(item => item.bai_tap_id._id === id)

export const exercisesFinishReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_EXERCISES_FINISH: {
      return payload.exercises;
    }
    case DELETE_BAI_TAP: {
      const index = findIndex(state, payload.id);
      const newState = [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
      return newState;
    }
    default:
      return state;
  }
};

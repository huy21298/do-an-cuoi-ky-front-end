import { GET_EXAM_NOT_FINISH } from "../actions/exam-not-finish.action";

export const init = [
  {
    _id: "",
    tieu_de: "",
    ngay_thi: "",
    duoc_phep_thi: false,
    ngay_thi_format: "",
    id: "",
    tieu_de_format: ""
  },
];

export const examNotFinishReducer = (state = init, { type, exam }) => {
  switch (type) {
    case GET_EXAM_NOT_FINISH: {
      return exam;
    }
    default:
      return state;
  }
};

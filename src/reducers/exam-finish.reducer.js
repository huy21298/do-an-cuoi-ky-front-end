import { GET_EXAM_FINISH } from "../actions/exam.action";

export const init = [
  {
    da_cham: false,
    bai_thi_id: {
      _id: "",
      tieu_de: "",
      nguoi_tao_id: {
        _id: "",
        ho: "",
        ten: "",
        hoten: "",
        id: "",
      },
      ngay_thi: "",
      duoc_phep_thi: false,
      ngay_thi_format: "",
    },
  },
];

export const examFinishReducer = (state = init, { type, exam }) => {
  switch (type) {
    case GET_EXAM_FINISH: {
      return exam;
    }
    default:
      return state;
  }
};

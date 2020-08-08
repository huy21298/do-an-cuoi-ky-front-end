import { GET_EXAM, GET_EXAM_FINISH } from '../actions/exam.action';

export const init = [{
  _id: "",
  tieu_de: "",
  ngay_thi: "00/00/00",
  ngay_thi_format: "",
  nguoi_tao_id: {
    _id: "",
    anh_dai_dien: "",
    ho: "",
    ten: "",
    hoten: ""
  },
}]

export const examReducer = (state = init, { type, exam }) => {
  switch (type) {
    case GET_EXAM: {
      return exam;
    }
    case GET_EXAM_FINISH: {
      return exam
    }
    default:
      return state;
  }
};
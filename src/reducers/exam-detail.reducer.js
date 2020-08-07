import { GET_EXAM_DETAIL } from "../actions/exam-detail.action";

export const init = {
  _id: "",
  tieu_de: "",
  nguoi_tao_id: {
    _id: "",
    ho: "",
    ten: "",
    hoten: "",
  },
  ngay_thi: "08/08/2020",
  thoi_gian_thi: 120,
  ds_cau_hoi: [
    {
      _id: "",
      cau_hoi_id: {
        _id: "",
        lua_chon: [
          {
            id: "",
            label: "",
            value: "",
          },
        ],
        noi_dung: "",
        diem: 0,
      },
      loai: "",
    },
  ],
};

export const examDetailReducer = (state = init, { type, exam }) => {
  switch (type) {
    case GET_EXAM_DETAIL: {
      return exam;
    }
    default:
      return state;
  }
};

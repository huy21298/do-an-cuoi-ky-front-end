import { GET_EXERCISE__DETAIL_FINISH } from "../actions/exercise-finish-detail.action";

export const init = {
  _id: "",
  loai: "",
  diem: 10,
  sinh_vien_id: "",
  lop_hoc_id: "",
  ex_id: {
    _id: "",
    tieu_de: "",
    noi_dung: "",
    nguoi_tao_id: {
      _id: "",
      ho: "",
      ten: "",
      hoten: "",
      id: "",
    },
    han_nop_bai: "",
    han_nop_bai_format: "",
    trang_thai_format: "",
    id: "",
  },
};

export const exerciseFinishDetailReducer = (state = init, { type, exercise }) => {
  switch (type) {
    case GET_EXERCISE__DETAIL_FINISH: {
      return exercise;
    }
    default:
      return state;
  }
};

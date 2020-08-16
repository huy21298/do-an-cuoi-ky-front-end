import {
  GET_BAI_TAP_CHUA_CHAM,
  SET_BAI_TAP_CHUA_CHAM,
} from "../actions/bai-tap-chua-cham.action";

export const init = {
  baiTap: {
    _id: "",
    ngay_tao: "2020-08-16T11:56:54.449Z",
    trang_thai: true,
    tieu_de: "",
    noi_dung: "",
    diem: 10,
    nguoi_tao_id: {
      _id: "",
      ho: "",
      ten: "",
      hoten: "",
      id: "",
    },
    lop_hoc_id: {
      _id: "",
      tieu_de: "",
      tieu_de_format: "",
      id: "",
    },
    han_nop_bai: "",
    tap_tin: [],
    createdAt: "",
    updatedAt: "",
    __v: 0,
    han_nop_bai_format: "",
    trang_thai_format: "",
    id: "",
  },
  baiNop: {
    da_cham_diem: false,
    _id: "",
    bai_nop: "",
    id: "",
  },
};

export const baiTapChuaCham = (state = init, { type, payload }) => {
  switch (type) {
    case GET_BAI_TAP_CHUA_CHAM: {
      return state;
    }
    case SET_BAI_TAP_CHUA_CHAM: {
      return payload.baiTap;
    }
    default:
      return state;
  }
};

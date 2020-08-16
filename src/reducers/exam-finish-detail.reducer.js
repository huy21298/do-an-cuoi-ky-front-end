import {
  GET_EXAM_FINISH_DETAIL,
  SET_EXAM_FINISH_DETAIL,
} from "../actions/exam-finish-detail.action";

const init = {
  bai_thi: {
    loai: "",
    _id: "",
    diem: 0,
    sinh_vien_id: {
      _id: "",
      ho: "",
      ten: "",
      hoten: "",
      ngay_sinh_format: "",
      gioi_tinh_format: "",
      id: "",
    },
    chi_tiet_bai_lam: [
      {
        _id: "",
        cau_hoi_id: {
          trang_thai: true,
          _id: "",
          lua_chon: [
            {
              id: "",
              label: "",
              value: "",
            },
            {
              id: "",
              label: "",
              value: "",
            },
            {
              id: "",
              label: "",
              value: "",
            },
            {
              id: "",
              label: "",
              value: "",
            },
          ],
          noi_dung: "",
          dap_an: {
            id: "",
            value: "",
          },
          diem: 10,
          danh_muc: "5f2fc385dee6cc0024ed1451",
        },
        cau_tra_loi: "",
        dung_sai: false,
        loai: "TracNghiem",
      },
    ],
  },
  ct_bai_thi: {
    _id: "",
    tieu_de: "",
    thoi_gian_thi: 0,
    duoc_phep_thi: true,
    ngay_thi_format: "",
  },
};

export const examFinishDetailReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_EXAM_FINISH_DETAIL: {
      // return payload.exam;
      return state;
    }
    case SET_EXAM_FINISH_DETAIL: {
      // console.log(' set payload.exam', payload.exam);
      return payload.exam
      // return state;
    }
    default:
      return state;
  }
};

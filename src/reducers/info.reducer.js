import { GET_INFO, SET_INFO, CHANGE_AVATAR } from "../actions/info.action.js";

export const init = {
  anh_dai_dien: "",
  _id: "",
  ma_sv: "",
  ho: "",
  ten: "",
  email: "",
  ngay_sinh: "",
  hoten: "",
  ngay_sinh_format: "",
  sdt: "",
  gioi_tinh: true,
  gioi_tinh_format: ""
};

export const infoReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_INFO: {
      return state;
    }
    case SET_INFO: {
      return payload.info
    }
    case CHANGE_AVATAR: {
      const { anh_dai_dien } = payload;
      return {...state, anh_dai_dien};
    }
    default:
      return state;
  }
};

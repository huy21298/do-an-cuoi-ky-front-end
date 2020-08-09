import { GET_INFO_SEND, SET_INFO_SEND, UPDATE_INFO_SEND } from "../actions/info-send.action.js";

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

export const infoSendReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_INFO_SEND: {
      return state;
    }
    case SET_INFO_SEND: {
      return payload.info
    }
    case UPDATE_INFO_SEND: {
      return {...state, ...payload.info};
    }
    default:
      return state;
  }
};

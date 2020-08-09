import { GET_INFO_CLASS } from '../actions/info-class.action.js';

export const init = {
  _id: "",
  tieu_de: "",
  nguoi_tao_id: {
    hoten: ""
  }
}

export const infoClassReducer = (state = init, { type, info }) => {
  switch (type) {
    case GET_INFO_CLASS: {
      return info;
    }
    default:
      return state;
  }
};
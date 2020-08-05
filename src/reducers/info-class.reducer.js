import { GET_INFO } from '../actions/info-class.action.js';

export const init = {
  _id: "",
  tieu_de: "",
  nguoi_tao_id: {
    hoten: ""
  }
}

export const infoClassReducer = (state = init, { type, info }) => {
  switch (type) {
    case GET_INFO: {
      return info;
    }
    default:
      return state;
  }
};
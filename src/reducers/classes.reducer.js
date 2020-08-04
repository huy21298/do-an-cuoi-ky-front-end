import { GET_CLASSES, ADD_CLASS } from '../actions/classes.action';

export const init = [{
  id: "",
  tieu_de: "Đang tải dữ liệu",
  nguoi_tao_id: {
    _id: "",
    anh_dai_dien: "",
    ho: "",
    ten: "",
    hoten: ""
  },
  avatar: "",
}]

export const classesReducer = (state = init, { type, classes }) => {
  switch (type) {
    case GET_CLASSES: {
      return classes;
    }
    case ADD_CLASS: {
      const newClasses = [...state, classes];
      return newClasses
    }
    default:
      return state;
  }
};
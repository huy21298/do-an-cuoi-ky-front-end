import { GET_STUDENTS } from '../actions/students.action.js';

export const init = [{
  _id: "",
  ho: "",
  ten: "",
  hoten: "",
  anh_dai_dien: ""
}]

export const studentReducer = (state = init, { type, students }) => {
  switch (type) {
    case GET_STUDENTS: {
      return students;
    }
    default:
      return state;
  }
};
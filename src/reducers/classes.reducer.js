import { GET_CLASSES } from '../actions/classes.action';

export const init = [{
  id: "",
  title: "",
  teacherName: "",
  avatar: "",
}]

export const classesReducer = (state = init, { type, classes }) => {
  switch (type) {
    case GET_CLASSES: {
      state = classes
      return state;
    }
    default:
      return state;
  }
};
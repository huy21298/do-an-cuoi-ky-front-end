import { GET_SCHEDULE } from '../actions/schedule.action.js';

export const init = [
  {
    _id: "",
    tieu_de: "",
    han_nop_bai: ""
  }
]

export const scheduleReducer = (state = init, { type, schedule }) => {
  switch (type) {
    case GET_SCHEDULE: {
      return schedule;
    }
    default:
      return state;
  }
};
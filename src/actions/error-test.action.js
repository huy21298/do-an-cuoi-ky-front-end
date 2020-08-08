export const GET_CODE = "GET_CODE";

export const SET_CODE = "SET_CODE";

export const actGetCode = () => ({ type: GET_CODE});

export const actSetCode = payload => ({ type: SET_CODE, payload });
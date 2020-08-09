export const GET_ERRRO_403 = "GET_ERRRO_403";

export const SET_ERROR_403  = "SET_ERROR_403";

export const actGetError403 = () => ({ type: GET_ERRRO_403});

export const actSetError403 = (error) => ({ type: SET_ERROR_403, error});
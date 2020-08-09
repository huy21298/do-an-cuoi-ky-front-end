export const GET_ERRRO_500 = "GET_ERRRO_500";

export const SET_ERROR_500  = "SET_ERROR_500";

export const actGetError500 = () => ({ type: GET_ERRRO_500});

export const actSetError500 = (error) => ({ type: SET_ERROR_500, error});
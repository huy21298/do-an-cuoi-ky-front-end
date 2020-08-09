export const GET_ERRRO_401 = "GET_ERRRO_401";

export const SET_ERROR_401  = "SET_ERROR_401";

export const actGetError401 = () => ({ type: GET_ERRRO_401});

export const actSetError401 = (error) => ({ type: SET_ERROR_401, error: { msg: "Xác thực thất bại, vui lòng đăng nhập lại"}});
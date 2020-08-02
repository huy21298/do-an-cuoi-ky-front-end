import AxiosService from "../services/axios.service";

export const GET_CLASSES = "GET_CLASSES";

export const actGetClasses = (classes) => ({ type: GET_CLASSES, classes });

export const actGetClassesReq = (token) => (dispatch) => {
  AxiosService.getAuth("/v1/lop-hoc", token)
    .then(response => dispatch(actGetClasses(response.data.data.lopHoc.ds_lop_hoc)))
    .catch(error => console.error(error))
}

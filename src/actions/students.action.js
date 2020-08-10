import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

const { token } = getTokenFromLocal();

export const GET_STUDENTS = "GET_STUDENTS";

const actGetStudents = (students) => ({ type: GET_STUDENTS, students });

export const actGetStudentsReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/danh-sach-sinh-vien`,
      token
    );
    if (data.success) {
      dispatch(actGetStudents(data.data.ds_sinh_vien));
      dispatch(actSetLoading(false));
    }
  } catch (error) {
    console.log('error', error);
    if (error?.status) {
      dispatch(actSetLoading(false));
      dispatchError(error.status, error.data, dispatch)
    }
  } finally {
    dispatch(actSetLoading(false));
  }
};

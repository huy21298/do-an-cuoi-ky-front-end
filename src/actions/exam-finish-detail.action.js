import AxiosService from "../services/axios.service";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";
export const GET_EXAM_FINISH_DETAIL = "GET_EXAM_FINISH_DETAIL";
export const SET_EXAM_FINISH_DETAIL = "SET_EXAM_FINISH_DETAIL";

export const actGetExamFinishDetail = () => ({ type: GET_EXAM_FINISH_DETAIL });
export const actSetExamFinishDetail = (exam) => ({
  type: SET_EXAM_FINISH_DETAIL,
  payload: { exam },
});

export const actGetExamFinishDetailReq = (idLopHoc, idBaiThi, token) => async (
  dispatch
) => {
  dispatch(actSetLoading(true))
  try {
    const { data } = await AxiosService.getAuth(
      `/v1/bai-thi/xem-diem?lop_hoc_id=${idLopHoc}&bai_thi_id=${idBaiThi}`,
      token
    );
    dispatch(actSetLoading(false));
    if (data.success) {
      // console.log('data', data);
      dispatch(actSetExamFinishDetail(data.data));
    }
  } catch (error) {
    console.log("error", error);
    if (error?.status) {
      dispatch(actSetLoading(false));
      dispatchError(error.status, error.data, dispatch);
    }
  } finally {
    dispatch(actSetLoading(false));
  }
};

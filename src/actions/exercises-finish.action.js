import AxiosService from "../services/axios.service";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_EXERCISES_FINISH = "GET_EXERCISES_FINISH";
export const DELETE_BAI_TAP = "DELETE_BAI_TAP";

const actGetExercisesFinish = (exercises) => ({ type: GET_EXERCISES_FINISH, payload: {exercises} });
export const actDeleteBaiTap = (id) => ({ type: DELETE_BAI_TAP, payload: { id } });

export const actGetExercisesFinishReq = (id, token) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/bai-tap-da-nop`,
      token
    );
    if (data.success) {
      dispatch(actGetExercisesFinish(data.bai_tap));
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

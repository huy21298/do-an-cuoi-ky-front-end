import AxiosService from "../services/axios.service";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_EXERCISE__DETAIL_FINISH = "GET_EXERCISE__DETAIL_FINISH";

const actGetExerciseDetailFinish = (exercise) => ({ type: GET_EXERCISE__DETAIL_FINISH, exercise });

export const actGetExamsFinishReq = (id, token) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/bai-tap/xem-diem/${id}`,
      token
    );
    console.log('data', data);
    if (data.success) {
      dispatch(actGetExerciseDetailFinish(data.bai_tap));
      dispatch(actSetLoading(false));
    }
  } catch (error) {
    dispatch(actSetLoading(false));
    console.log("error", error);
    dispatchError(error.status, error.data, dispatch);
  } finally {
    dispatch(actSetLoading(false));
  }
};

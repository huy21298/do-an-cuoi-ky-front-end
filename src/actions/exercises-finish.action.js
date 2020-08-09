import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

const { token } = getTokenFromLocal();

export const GET_EXERCISES_FINISH = "GET_EXERCISES_FINISH";

const actGetExercisesFinish = (exercises) => ({ type: GET_EXERCISES_FINISH, exercises });

export const actGetExercisesFinishReq = (id) => async (dispatch) => {
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
    console.log('error', error)
    dispatch(actSetLoading(false));
    dispatchError(error.status, error.data, dispatch);
  } finally {
    dispatch(actSetLoading(false));
  }
};

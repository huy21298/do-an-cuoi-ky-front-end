import AxiosService from "../services/axios.service";

import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_EXERCISES = "GET_EXERCISES";
export const SEND_EXERCISE = "SEND_EXERCISE";

const actGetExercises = (exercises) => ({ type: GET_EXERCISES, payload: {exercises} });

export const actSentExercise = (id) => ({ type: SEND_EXERCISE, payload: {id}})

export const actGetExercisesReq = (id, token) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/bai-tap`,
      token
    );
    if (data.success) {
      dispatch(actGetExercises(data.data.bai_tap));
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

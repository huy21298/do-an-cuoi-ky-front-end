import AxiosService from '../services/axios.service';
import { getTokenFromLocal } from '../reducers/token.reducer';

import { actSetLoading } from "./loading.action";

const { token } = getTokenFromLocal();

export const GET_EXERCISES = "GET_EXERCISES";

const actGetExercises = (exercises) => ({type: GET_EXERCISES, exercises});

export const actGetExercisesReq = (id) => async dispatch => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(`/v1/lop-hoc/${id}/bai-tap`, token);
    if (data.success) {
      dispatch(actGetExercises(data.data.bai_tap));
      dispatch(actSetLoading(false));
    }
  } catch {
    dispatch(actSetLoading(false));
  } finally {
    dispatch(actSetLoading(false));
  }
}
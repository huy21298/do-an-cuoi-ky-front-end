import AxiosService from "../services/axios.service";

import { actSetLoadingData } from "./loading-data.action";
// import { } from
import { dispatchError } from "./dispatch-error";

export const GET_EXERCISE__DETAIL_FINISH = "GET_EXERCISE__DETAIL_FINISH";

const actGetExerciseDetailFinish = (exercise) => ({ type: GET_EXERCISE__DETAIL_FINISH, exercise });

export const actGetExamsFinishReq = (id, token) => async (dispatch) => {
  try {
    dispatch(actSetLoadingData(true));
    const { data } = await AxiosService.getAuth(
      `/v1/bai-tap/xem-diem/${id}`,
      token
    );
    console.log('data', data);
    if (data.success) {
      dispatch(actGetExerciseDetailFinish(data.bai_tap));
      dispatch(actSetLoadingData(false));
    }
  } catch (error) {
    if (error?.status) {
      dispatch(actSetLoadingData(false));
      dispatchError(error.status, error.data, dispatch);
    }
  } finally {
    dispatch(actSetLoadingData(false));
  }
};

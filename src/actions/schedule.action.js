import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";
import { actSetLoading } from "./loading.action";
import { dispatchError } from "./dispatch-error";

export const GET_SCHEDULE = "GET_SCHEDULE";

const { token } = getTokenFromLocal();

const actGetSchedule = (schedule) => ({ type: GET_SCHEDULE, schedule });

export const actGetScheduleClassReq = (id) => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { data } = await AxiosService.getAuth(
      `/v1/lop-hoc/${id}/han-nop`,
      token
    );
    if (data.success) {
      dispatch(actSetLoading(false));
      dispatch(actGetSchedule(data.data));
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

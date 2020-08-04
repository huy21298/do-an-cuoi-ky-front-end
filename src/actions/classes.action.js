import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";
import { actSetMessage } from "./error-message.action";
import { actSetAuthenticate } from "./authenticate.action";
import { actSetLoading } from "./loading.action";
import { initToken, setTokenToLocal} from '../reducers/token.reducer';

export const GET_CLASSES = "GET_CLASSES";
export const ADD_CLASS = "ADD_CLASS";

export const actGetClasses = (classes) => ({ type: GET_CLASSES, classes });
export const actAddClass = (classes) => ({ type: ADD_CLASS, classes });

export const actGetClassesReq = () => async (dispatch) => {
  try {
    dispatch(actSetLoading(true));
    const { token } = getTokenFromLocal();
    const response = await AxiosService.getAuth("/v1/lop-hoc", token);
    if (response) {
      dispatch(actGetClasses(response.data.data.lopHoc.ds_lop_hoc));
      dispatch(actSetLoading(false));
    }
  } catch (error) {
    console.log('error', error);
    dispatch(actSetLoading(false));
    if (error.status === 403) {
      dispatch(actSetAuthenticate(false));
      setTokenToLocal(initToken);
      dispatch(actSetMessage(error?.data?.msg))
    } else {
      dispatch(actSetMessage(error?.data?.msg || error))
    }
  }
};

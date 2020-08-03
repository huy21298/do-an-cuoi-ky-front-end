import AxiosService from "../services/axios.service";
import { getTokenFromLocal } from "../reducers/token.reducer";
import { actSetMessage } from "./error-message.action";
import { actSetAuthenticate } from "./authenticate.action";
import { initToken, setTokenToLocal} from '../reducers/token.reducer';

export const GET_CLASSES = "GET_CLASSES";

export const actGetClasses = (classes) => ({ type: GET_CLASSES, classes });

export const actGetClassesReq = () => async (dispatch) => {
  try {
    const { token } = getTokenFromLocal();
    const response = await AxiosService.getAuth("/v1/lop-hoc", token);
    if (response) {
      dispatch(actGetClasses(response.data.data.lopHoc.ds_lop_hoc));
    }
  } catch (error) {
    console.log('error', error)
    if (error.status === 403) {
      dispatch(actSetAuthenticate(false));
      setTokenToLocal(initToken);
      dispatch(actSetMessage(error.data.msg))
    } else {
      dispatch(actSetMessage(error.data.msg))
    }
  }
};

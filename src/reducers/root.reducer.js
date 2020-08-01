import { combineReducers } from "redux";
import { tokenReducer as token } from "./token.reducer";
import { messagesLoginReducer as messageLogin } from "./messages-login.reducer";
import { loadingReducer as loading } from "./loading.reducer";
import { authenticateReducer as authenticate} from './authenticate.reducer';

export default combineReducers({
  token,
  messageLogin,
  loading,
  authenticate
});
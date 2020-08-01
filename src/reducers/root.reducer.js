import { combineReducers } from "redux";
import { authenticateReducer as authenticate } from "./authenticate.reducer";
import { messagesLoginReducer as messageLogin } from "./messages-login.reducer";
import { loadingReducer as loading } from "./loading.reducer";

export default combineReducers({
  authenticate,
  messageLogin,
  loading
});

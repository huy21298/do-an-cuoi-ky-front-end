import { combineReducers } from "redux";
import { tokenReducer as token } from "./token.reducer";
import { messagesLoginReducer as messageLogin } from "./messages-login.reducer";
import { loadingReducer as loading } from "./loading.reducer";
import { authenticateReducer as authenticate} from './authenticate.reducer';
import { displayTabNavigationReducer as displayTabNavigation} from './display-tab-navigation.reducer';
import { classesReducer as classes} from './classes.reducer';
import { errorMessageReducer as errorMessage } from './error-message.reducer';

export default combineReducers({
  token,
  messageLogin,
  loading,
  authenticate,
  displayTabNavigation,
  classes,
  errorMessage
});

import { combineReducers } from "redux";
import { tokenReducer as token } from "./token.reducer";
import { messagesLoginReducer as messageLogin } from "./messages-login.reducer";
import { loadingReducer as loading } from "./loading.reducer";
import { authenticateReducer as authenticate} from './authenticate.reducer';
import { displayTabNavigationReducer as displayTabNavigation} from './display-tab-navigation.reducer';
import { classesReducer as classes} from './classes.reducer';
import { errorMessageReducer as errorMessage } from './error-message.reducer';
import { examReducer as exam } from './exam.reducer';
import { examFinishReducer as examFinish } from './exam-finish.reducer';
import { infoClassReducer as infoClass } from './info-class.reducer';
import { scheduleReducer as schedule } from './schedule.reducer';
import { exercisesReducer as exercises } from './exercises.reducer';
import { classIDReducer as classID } from './class-id.reducer';
import { studentReducer as students } from './student.reducer';
import { examDetailReducer as examDetail } from './exam-detail.reducer';
import { sendExamReducer as sendExam } from './send-exam.reducer';
import { infoReducer as info } from './info.reducer';
import { errorTestReducer as errorTest } from './error-test.reducer';
import { loadingHeaderReducer as loadingHeader } from './loading-header-classroom.reducer';

export default combineReducers({
  token,
  messageLogin,
  loading,
  authenticate,
  displayTabNavigation,
  classes,
  errorMessage,
  exam,
  infoClass,
  schedule,
  exercises,
  classID,
  students,
  examDetail,
  sendExam,
  info,
  errorTest,
  loadingHeader,
  examFinish
});

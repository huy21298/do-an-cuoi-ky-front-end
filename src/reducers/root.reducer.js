import { combineReducers } from "redux";
import { tokenReducer as token } from "./token.reducer";
import { messagesLoginReducer as messageLogin } from "./messages-login.reducer";
import { loadingReducer as loading } from "./loading.reducer";
import { authenticateReducer as authenticate } from "./authenticate.reducer";
import { displayTabNavigationReducer as displayTabNavigation } from "./display-tab-navigation.reducer";
import { classesReducer as classes } from "./classes.reducer";
import { errorMessageReducer as errorMessage } from "./error-message.reducer";
import { examReducer as exam } from "./exam.reducer";
import { examFinishReducer as examFinish } from "./exam-finish.reducer";
import { infoClassReducer as infoClass } from "./info-class.reducer";
import { scheduleReducer as schedule } from "./schedule.reducer";
import { exercisesReducer as exercises } from "./exercises.reducer";
import { classIDReducer as classID } from "./class-id.reducer";
import { studentReducer as students } from "./student.reducer";
import { examDetailReducer as examDetail } from "./exam-detail.reducer";
import { sendExamReducer as sendExam } from "./send-exam.reducer";
import { infoReducer as info } from "./info.reducer";
import { infoSendReducer as infoSend } from "./info-send.reducer";
import { errorTestReducer as errorTest } from "./error-test.reducer";
import { loadingHeaderReducer as loadingHeader } from "./loading-header-classroom.reducer";
import { error403Reducer as error403 } from "./errors/403.reducer";
import { error500Reducer as error500 } from "./errors/500.reducer";
import { error401Reducer as error401 } from "./errors/401.reducer";
import { exercisesFinishReducer as exercisesFinish } from "./exercises-finish.reducer";
import { exercisesNotFinishReducer as exercisesNotFinish } from "./exercises-not-finish.reducer";
import { examTimeReducer as examTime } from "./exam-time.reducer";
import { isShowMessageReducer as isShowMessage } from "./is-show-message.reducer";
import { exerciseFinishDetailReducer as exerciseFinishDetail } from "./exercise-finish-detail.reducer";
import { loadingDataReducer as loadingData } from "./loading-data.reducer";
import { examFinishDetailReducer as examFinishDetail } from "./exam-finish-detail.reducer";

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
  examFinish,
  error403,
  error500,
  error401,
  exercisesFinish,
  exercisesNotFinish,
  infoSend,
  examTime,
  isShowMessage,
  exerciseFinishDetail,
  loadingData,
  examFinishDetail
});

import { GET_IS_AUTHENTICATE, SET_IS_AUTHENTICATE } from '../actions/authenticate.action';

export const init = false;

export const authenticateReducer = (state = init, { type, authenticate }) => {
  switch (type) {
    case GET_IS_AUTHENTICATE: {
      state = getTokenFromLocal();
      return state;
    }
    case SET_IS_AUTHENTICATE: {
      state = authenticate;
      return state;
    }
    default:
      return state;
  }
};

const initToken = {
  token: "",
  type: "Bearer",
  expires: new Date(),
  timeout: new Date(),
};

const setTokenToLocal = (data) => {
  const timeout = new Date();
  timeout.setSeconds(timeout.getSeconds() + data.expires);
  const authenticate = {
    ...data,
    timeout,
  };
  localStorage.setItem("authenticate", JSON.stringify(authenticate));
};

const getTokenFromLocal = () => {
  const authenticate = JSON.parse(localStorage.getItem("authenticate")) || initToken;
  if (authenticate.token.length <= 0) {
    return false;
  }
  const timeout = new Date(authenticate.timeout);
  const currentDate = new Date();
  const compareTwoDate = timeout.getTime() > currentDate.getTime();
  if (compareTwoDate) {
    return true;
  }
  setTokenToLocal(initToken);
  return false;
};
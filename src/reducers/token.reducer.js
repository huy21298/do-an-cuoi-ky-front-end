import { GET_TOKEN, SET_TOKEN, RESET_TOKEN } from '../actions/token.action';

export const initToken = {
  token: "",
  type: "Bearer",
  expires: new Date(),
  timeout: new Date(),
};

export const tokenReducer = (state = initToken, { type, authenticate }) => {
  switch (type) {
    case GET_TOKEN: {
      state = getTokenFromLocal();
      return state;
    }
    case SET_TOKEN: {
      setTokenToLocal(authenticate);
      state = getTokenFromLocal();
      return state;
    }
    case RESET_TOKEN: {
      setTokenToLocal(initToken);
      state = getTokenFromLocal();
      return state;
    }
    default:
      return state;
  }
};

export const setTokenToLocal = (data) => {
  const timeout = new Date();
  timeout.setSeconds(timeout.getSeconds() + data.expires);
  const authenticate = {
    ...data,
    timeout,
  };
  localStorage.setItem("authenticate", JSON.stringify(authenticate));
};

export const getTokenFromLocal = () => {
  const authenticate = JSON.parse(localStorage.getItem("authenticate")) || initToken;
  const timeout = new Date(authenticate.timeout);
  const currentDate = new Date();
  const compareTwoDate = timeout.getTime() > currentDate.getTime();
  if (compareTwoDate) {
    return authenticate;
  }
  setTokenToLocal(initToken);
  return initToken;
};

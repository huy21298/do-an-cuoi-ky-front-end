import { GET_TOKEN, SET_TOKEN } from '../actions/authenticate.action';

export const initToken = {
  token: "",
  type: "Bearer",
  expires: new Date(),
  timeout: new Date(),
};

export const authenticateReducer = (state = initToken, { type, authenticate }) => {
  switch (type) {
    case GET_TOKEN: {
      console.log('hello')
      state = getTokenFromLocal();
      return state;
    }
    case SET_TOKEN: {
      setTokenToLocal(authenticate);
      state = getTokenFromLocal();
      return state;
    }
    default:
      return state;
  }
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
  const timeout = new Date(authenticate.timeout);
  const currentDate = new Date();
  const compareTwoDate = timeout.getTime() > currentDate.getTime();
  if (compareTwoDate) {
    return authenticate;
  }
  setTokenToLocal(initToken);
  return initToken;
};

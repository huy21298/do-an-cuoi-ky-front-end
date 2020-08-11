import React, { useEffect, useRef } from "react";
import Routes from "./routes";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";

import { actGetAuthenticate } from "./actions/authenticate.action";
import { actGetError401 } from "./actions/errors/401.action";
import { actGetError500 } from "./actions/errors/500.action";
import { actGetError403 } from "./actions/errors/403.action";
import { actResetToken } from "./actions/token.action";
import { showToastError } from './services/toast.service';

import "react-toastify/dist/ReactToastify.css";

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

function App() {
  const history = useHistory();
  const authenticate = useSelector((state) => state.authenticate);
  const error401 = useSelector((state) => state.error401);
  const error403 = useSelector((state) => state.error403);
  const error500 = useSelector((state) => state.error500);
  const prevError500 = usePrevious(error500)
  // console.log('error500', error500)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAuthenticate());
    dispatch(actGetError401());
    dispatch(actGetError500());
    dispatch(actGetError403());
  }, []);

  useEffect(() => {

    // if (error401?.msg?.length > 0 && error401.active) {
    //   dispatch(actResetToken());
    //   showToastError(error401.msg)
    // }
    if (error500?.msg?.length > 0 && prevError500?.msg?.length === 0) {
      showToastError(error500.msg);
      console.log('error500', error500)
    }

    if (error403?.errors[0]?.msg?.length > 0) {
      showToastError(error403.errors[0].msg)
    }
  }, [error500, error401, error403]);

  return (
    <div className="App">
      {authenticate && <Header />}
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;

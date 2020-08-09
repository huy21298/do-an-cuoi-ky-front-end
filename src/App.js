import React, { useEffect } from "react";
import Routes from "./routes";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";

import { actGetAuthenticate } from "./actions/authenticate.action";
import { actGetError401 } from "./actions/errors/401.action";
import { actGetError500 } from "./actions/errors/500.action";
import { actResetToken } from "./actions/token.action";
import { showToastError } from './services/toast.service';

import "react-toastify/dist/ReactToastify.css";

function App() {
  const history = useHistory();
  const authenticate = useSelector((state) => state.authenticate);
  const error401 = useSelector((state) => state.error401);
  const error500 = useSelector((state) => state.error500);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actGetAuthenticate());
    dispatch(actGetError401());
    dispatch(actGetError500());
  }, []);

  useEffect(() => {
    if (error401.msg.length < 1 && error401.active) {
      dispatch(actResetToken());
      // history.push("/dang-nhap");
      showToastError(error401.msg)
    }

    if (error500.msg.length > 0) {
      showToastError(error500.msg)
    }
  }, []);

  return (
    <div className="App">
      {authenticate && <Header />}
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;

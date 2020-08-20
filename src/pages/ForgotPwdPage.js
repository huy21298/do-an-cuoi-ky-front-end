import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import ForgotPassword from "../components/Login/ForgotPassword";
import SendMail from "../components/Login/SendMail";
import { actGetAuthenticate } from "../actions/authenticate.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";

import "../styles/login-page.scss";

const LoginPage = () => {
  const authenticate = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const [form, setForm] = useState("forgot-pwd");

  const changeForm = title => {
    setForm(title);
  }

  useEffect(() => {
    dispatch(actGetAuthenticate());
    dispatch(actSetIsDisplayHeader(false));
    document.title = "Quên mật khẩu"
  }, []);
  return authenticate ? (
    <Redirect to="/danh-sach-lop-hoc" />
  ) : (
    <Grid container className="login-page" component="article">
      <Grid item md={4} />
      <Grid item md={3} component="section" className="login-form">
        {form === "forgot-pwd" && <ForgotPassword changeForm={changeForm} />}
        {form === "send-mail" && <SendMail changeForm={changeForm} />}
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
};

export default LoginPage;

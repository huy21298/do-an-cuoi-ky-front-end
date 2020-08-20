import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";

import FormLogin from "../components/Login/FormLogin";
import { actGetAuthenticate } from "../actions/authenticate.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";

import "../styles/login-page.scss";

const LoginPage = () => {
  const authenticate = useSelector((state) => state.authenticate);
  const dispatch = useDispatch();
  const { location } = useHistory();

  useEffect(() => {
    dispatch(actGetAuthenticate());
    dispatch(actSetIsDisplayHeader(false));
    document.title = "Đăng nhập"
  }, []);
  
  return authenticate ? (
    <Redirect to={location.state?.from?.pathname || "/"} />
  ) : (
    <Grid container className="login-page" component="article">
      <Grid item md={4} />
      <Grid item md={3} component="section" className="login-form">
        <FormLogin />
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
};

export default LoginPage;

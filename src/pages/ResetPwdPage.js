import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";

import ResetPwd from "../components/Login/ResetPwd";
import { actSetIsDisplayHeader } from "../actions/display-header.action";

import "../styles/login-page.scss";

const ResetPwdPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actSetIsDisplayHeader(false));
  }, []);
  return (
    <Grid container className="login-page" component="article">
      <Grid item md={4} />
      <Grid item md={3} component="section" className="login-form">
        <ResetPwd />
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
};

export default ResetPwdPage;

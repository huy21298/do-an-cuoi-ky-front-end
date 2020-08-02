import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {useParams } from "react-router-dom";

import ResetPwd from "../components/Login/ResetPwd";

import "../styles/login-page.scss";

const LoginPage = () => {
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

export default LoginPage;

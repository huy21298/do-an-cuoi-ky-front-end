import React from "react";
import Grid from "@material-ui/core/Grid";

import FormLogin from '../components/Login/FormLogin'

import "../styles/login-page.scss";


const LoginPage = () => {
  return (
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

import React from "react";
import Grid from "@material-ui/core/Grid";

import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

import "../styles/login-page.scss";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    margin: {
      margin: theme.spacing(0),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    buttonSubmit: {
      width: "100%"
    },
    marginBottom: {
      marginBottom: theme.spacing(2)
    },
    buttonProgress: {
      color: "#303F9F",
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
    wrapper: {
      position: 'relative',
    },
  })
);

const LoginPage = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event
  ) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (
    event
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <Grid container className="login-page" component="article">
      <Grid item md={4} />
      <Grid item md={3} component="section" className="login-form">
        <div className="title">Welcome</div>
        <div className="intro">Đăng nhập để sử dụng <span className="title-logo">Navilearn</span></div>
        <form action="">
          <TextField
            fullWidth
            label="Email"
            id="outlined-start-adornment"
            className={clsx(classes.margin, classes.marginBottom)}
            variant="outlined"
          />
          <FormControl
            fullWidth
            className={clsx(classes.margin)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Mật khẩu
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
          <div className={clsx(classes.margin, "forgot-password")}>
            Quên mật khẩu ?
          </div>
          <div className={classes.wrapper}>
          <Button disabled={true} className={clsx(classes.margin, classes.buttonSubmit)} variant="contained" size="large" color="primary" disableElevation>
            Đăng nhập
            <CircularProgress size={24} className={classes.buttonProgress} />
          </Button>
          </div>
          
        </form>
      </Grid>
      <Grid item md={4} />
    </Grid>
  );
};

export default LoginPage;

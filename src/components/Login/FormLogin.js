import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import {
  actGetTokenFromLocal,
  actSetTokenToLocalReq,
} from "../../actions/token.action";
import {
  actGetMessages,
  actSetMessages,
} from "../../actions/message-login.action";
import { actGetLoading } from "../../actions/loading.action";

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
      width: "100%",
    },
    marginBottom: {
      marginBottom: theme.spacing(2),
    },
    buttonProgress: {
      color: "#303F9F",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
      display: "none",
      "&.active": {
        display: "block",
      },
    },
    wrapper: {
      position: "relative",
    },
  })
);

const FormLogin = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const errorMessages = useSelector((state) => state.messageLogin);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetTokenFromLocal());
    dispatch(actGetMessages());
    dispatch(actGetLoading());
  }, []);

  const handleSubmitLogin = (values) => {
    dispatch(actSetTokenToLocalReq(values));
    dispatch(
      actSetMessages([
        {
          msg: "",
          param: "",
        },
      ])
    );
  };

  return (
    <>
      <div className="title">Welcome</div>
      <div className="intro">
        Đăng nhập để tham gia <span className="title-logo">Navilearn</span>
      </div>
      <form action="" method="POST">
        <TextField
          error={
            errors.email?.message.length > 0 ||
            errorMessages[0].param === "email"
          }
          fullWidth
          label="Email"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.marginBottom)}
          variant="outlined"
          name="email"
          helperText={
            errors.email?.message ||
            (errorMessages[0].param === "email" && errorMessages[0].msg)
          }
          inputRef={register({
            required: "Email không để trống",
            pattern: {
              value: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
              message: "Email không đúng định dạng",
            },
          })}
        />
        <TextField
          error={
            errors.mat_khau?.message.length > 0 ||
            errorMessages[0].param === "mat_khau"
          }
          type="password"
          fullWidth
          label="Mật khẩu"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.marginBottom)}
          variant="outlined"
          name="mat_khau"
          helperText={
            errors.mat_khau?.message ||
            (errorMessages[0].param === "mat_khau" && errorMessages[0].msg)
          }
          inputRef={register({
            required: "Mật khẩu không để trống",
            minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
            maxLength: { value: 24, message: "Mật khẩu tối đa 24 ký tự" },
          })}
        />
        <div className={clsx(classes.margin, "forgot-password")}>
          Quên mật khẩu ?
        </div>
        <div className={classes.wrapper}>
          <Button
            disabled={isLoading}
            className={clsx(classes.margin, classes.buttonSubmit)}
            variant="contained"
            size="large"
            color="primary"
            disableElevation
            onClick={handleSubmit(handleSubmitLogin)}
            type="submit"
          >
            Đăng nhập
            <CircularProgress
              size={24}
              className={
                isLoading
                  ? clsx(classes.buttonProgress, "active")
                  : classes.buttonProgress
              }
            />
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;

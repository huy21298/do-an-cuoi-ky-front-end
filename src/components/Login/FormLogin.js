import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import {
  actGetTokenFromLocal,
  actSetTokenToLocalReq,
} from "../../actions/token.action";
import { actGetLoading } from "../../actions/loading.action";
import { actGetError403 } from '../../actions/errors/403.action';

export const useStyles = makeStyles((theme) =>
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

const FormLogin = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setError } = useForm();
  const isLoading = useSelector((state) => state.loading);
  const error403 = useSelector((state) => state.error403);
  useEffect(() => {
    dispatch(actGetTokenFromLocal());
    dispatch(actGetError403());
    dispatch(actGetLoading());
  }, []);

  useEffect(() => {
    if (error403.errors[0].param === "email") {
      setError("email", {
        message: error403.errors[0].msg,
      });
    }
    if (error403.errors[0].param === "mat_khau") {
      setError("mat_khau", {
        message: error403.errors[0].msg,
      });
    }
  }, [error403]);

  const handleSubmitLogin = (values) => {
    dispatch(actSetTokenToLocalReq(values));
  };

  return (
    <>
      <div className="title">Welcome</div>
      <div className="intro">
        Đăng nhập để tham gia <span className="title-logo">Navilearn</span>
      </div>
      <form action="" method="POST">
        <TextField
          error={errors.email?.message.length > 0}
          fullWidth
          label="Email"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.marginBottom)}
          variant="outlined"
          name="email"
          helperText={errors.email?.message}
          inputRef={register({
            required: "Email không để trống",
            pattern: {
              value: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
              message: "Email không đúng định dạng",
            },
          })}
        />
        <TextField
          error={errors.mat_khau?.message.length > 0}
          type="password"
          fullWidth
          label="Mật khẩu"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.marginBottom)}
          variant="outlined"
          name="mat_khau"
          helperText={errors.mat_khau?.message}
          inputRef={register({
            required: "Mật khẩu không để trống",
            minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
            maxLength: { value: 24, message: "Mật khẩu tối đa 24 ký tự" },
            pattern: {
              value: /^(?=.*[0-9])(?=.*[A-Z]).{6,24}$/,
              message:
                "Mật khẩu tối thiểu 6 ký tự, tối đa 24 ký tự và có ít nhất một chữ viết hoa và số",
            },
          })}
        />
        <div className={clsx(classes.margin, "forgot-password")}>
          <Link to="/quen-mat-khau" style={{ textDecoration: "none" }}>
            Quên mật khẩu ?
          </Link>
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

import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { actGetError403 } from '../../actions/errors/403.action';

import AxiosService from "../../services/axios.service";

import "../../styles/forgot-pwd.scss";

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

const ForgotPassword = ({ changeForm }) => {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, errors, setError } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitSendMail = (values) => {
    setIsLoading(true);
    AxiosService.post("/v1/password/quen-mat-khau", values)
      .then((res) => {
        setIsLoading(false);
        if (res.data.success) {
          changeForm('send-mail')
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setError("email", { message: error.data.errors[0].msg });
      });
  };

  return (
    <>
      <div className="title forgot-pwd" style={{ marginTop: "60px" }}>
        Quên mật khẩu?
      </div>
      <div className="intro">
        Vui lòng nhập email mà bạn đã đăng ký trước đó và kiểm tra hộp thư
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
        <div className={classes.wrapper}>
          <Button
            disabled={isLoading}
            className={clsx(classes.margin, classes.buttonSubmit)}
            variant="contained"
            size="large"
            color="primary"
            disableElevation
            onClick={handleSubmit(handleSubmitSendMail)}
            type="submit"
            style={{ marginTop: "15px" }}
          >
            Tiếp tục
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
        <footer className="footer-forgot-password">
          <Link to="/dang-nhap">Đăng nhập</Link>
        </footer>
      </form>
    </>
  );
};

export default ForgotPassword;

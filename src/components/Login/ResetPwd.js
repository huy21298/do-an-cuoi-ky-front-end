import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { Link, useParams, useHistory } from "react-router-dom";

import AxiosService from "../../services/axios.service";

import DialogMessage from "../DialogMessage";

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

const ResetPwd = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, setError, watch } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [message, setMessage] = useState("");
  const { code, email } = useParams();
  const history = useHistory();

  const handleSubmitLogin = async (values) => {
    setIsLoading(true);
    AxiosService.post(`/v1/password/doi-mat-khau/${code}/${email}`, values)
      .then(({ data }) => {
        setIsLoading(false);
        if (data.success) {
          setOpenDialog(true);
          setMessage("Thay đổi mật khẩu thành công, hệ thống sẽ chuyển đến trang đăng nhập trong vài giây");
          setTimeout(() => {
            setOpenDialog(false)
            history.push("/");
          }, 2000);
        } else {
          setOpenDialog(true);
          setMessage(data.msg);
        }
      })
      .catch((error) => {
        console.log('error :>> ', error);
        setIsLoading(false);
        setOpenDialog(true);
        if (error.status === 403) {
          setMessage(error.data.msg)
        } else {
          setMessage(error.data.errors[0].msg);
        }
      });
  };

  return (
    <>
      <div className="title forgot-pwd" style={{ marginTop: "20px" }}>
        Làm mới mật khẩu
      </div>
      <div className="intro">
        Nhập mật khẩu mới để tiến hành làm mới mật khẩu
      </div>
      <form action="" method="POST">
        <TextField
          error={errors.mat_khau?.message.length > 0}
          fullWidth
          label="Mật khẩu mới"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.marginBottom)}
          variant="outlined"
          name="mat_khau"
          type="password"
          helperText={errors.mat_khau?.message}
          inputRef={register({
            required: "Mật khẩu không được để trống",
            pattern: {
              value: /^(?=.*[0-9])(?=.*[A-Z]).{6,24}$/,
              message:
                "Mật khẩu tối thiểu 6 ký tự, tối đa 24 ký tự và có ít nhất một chữ viết hoa và số",
            },
          })}
        />
        <TextField
          error={errors.comparepassword?.message.length > 0}
          fullWidth
          label="Xác nhận mật khẩu"
          id="outlined-start-adornment"
          className={clsx(classes.margin, classes.marginBottom)}
          variant="outlined"
          name="comparepassword"
          type="password"
          helperText={errors.comparepassword?.message}
          inputRef={register({
            required: "Không được để trống",
            validate: (value) =>
              value === watch("mat_khau") || "Mật khẩu phải giống nhau",
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
            onClick={handleSubmit(handleSubmitLogin)}
            type="submit"
            style={{ marginTop: "15px" }}
          >
            Thay đổi mật khẩu
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
      <DialogMessage
        open={openDialog}
        message={message}
        handleCloseDialog={() => setOpenDialog(false)}
      />
    </>
  );
};

export default ResetPwd;

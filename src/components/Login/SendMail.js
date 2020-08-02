import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import {
  actGetTokenFromLocal,
  actSetTokenToLocalReq,
} from "../../actions/token.action";
import {
  actGetMessages,
  actSetMessages,
} from "../../actions/message-login.action";
import { actGetLoading, actSetLoading } from "../../actions/loading.action";

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

const SendMail = (props) => {
  const classes = useStyles();
  const { register, handleSubmit, errors, setError } = useForm();
  const errorMessages = useSelector((state) => state.messageLogin);
  const isLoading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
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
    <div className="send-mail" style={{height: "100%"}}>
      <div className="content">
        <div className="icon-content">
          <MailOutlineIcon className="icon" style={{fontSize: "60px"}} />
        </div>
        <div className="title">Kiểm tra email</div>
        <div className="description">
          Vui lòng kiểm tra hộp thư đến để nhận được hướng dẫn đổi mật khẩu
        </div>
      </div>
      <footer className="footer-forgot-password send-mail">
        Không nhận được mail? <span className="recieve-mail">Gửi lại</span>
      </footer>
    </div>
  );
};

export default SendMail;

import React, { useState, useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import classnames from "classnames";
import ReactFileReader from "react-file-reader";
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from "react-redux";
import {} from "../../actions/info-class.action";
import AxiosService from "../../services/axios.service";
import { actGetTokenFromLocal } from "../../actions/token.action";
import { actSentExercise } from "../../actions/exercises.action";

import { showToastSuccess, showToastError } from "../../services/toast.service";
import { dispatchError } from "../../actions/dispatch-error";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExerciseDetail({ open, handleClose, exercise }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const infoClass = useSelector((state) => state.infoClass);
  const { token } = useSelector((state) => state.token);
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const { id: lop_hoc_id } = useParams();
  const {_id: bai_tap_id} = exercise;

  useEffect(() => {
    dispatch(actGetTokenFromLocal());
  }, [])

  const handleFiles = (files) => {
    setFile(files.fileList[0]);
  };

  const nopBaiTap = async (e) => {
    try {
      if (file) {
        setLoading(false);
        const formData = new FormData();
        formData.append("bai_tap", file);
        formData.append("lop_hoc_id", lop_hoc_id);
        formData.append("bai_tap_id", bai_tap_id);
        const { data } = await AxiosService.postAuth(`/v1/bai-tap/nop-bai`, formData, token);
        if (data.success) {
          dispatch(actSentExercise(bai_tap_id));
          setLoading(false);
          showToastSuccess(data.msg);
          handleClose();
        } else {
          showToastError("Nộp bài tập thất bại, vui lòng thử lại sau")
        }
      } else {
        showToastError("Chưa có tệp nào được tải lên")
      }
    } catch (error) {
      setLoading(false);
      dispatchError(error.status, error.data, dispatch)
    } finally {
      setLoading(false);
    }
  };

  const styleButton = classnames({
    button: true,
    confirm: true,
    active,
  });

  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {infoClass.tieu_de}
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container component="section" className="exercis-detail">
          <Grid item md={2} />
          <Grid item md={8}>
            <Grid container spacing={4}>
              <Grid item md={8}>
                <div className="header">
                  <div className="title">{exercise.tieu_de}</div>
                  <div className="sub-title">
                    {exercise.nguoi_tao_id?.hoten} - {exercise.createdAt}
                  </div>
                  <div className="sub-sub-title">
                    <div className="score">Đến hạn: {exercise.han_nop_bai_format}</div>
                    <div className="deadline"></div>
                  </div>
                </div>
                <div className="border"></div>
                <div className="content">{exercise.noi_dung}</div>
              </Grid>
              <Grid item md={4}>
                <Paper elevation={4} className="send-exercise">
                  <div className="header">
                    <div className="title">Bài tập của bạn</div>
                    <div className="status empty">Thiếu</div>
                  </div>
                  <input
                    accept="image/*"
                    style={{ display: "none" }}
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <ReactFileReader
                    base64={true}
                    handleFiles={handleFiles}
                  >
                    <Button
                      className="button send"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      { file ? getFileNameFormat(file.name) : "Nộp bài tập"}
                    </Button>
                  </ReactFileReader>

                  <Button
                    className={styleButton}
                    onClick={nopBaiTap}
                    disabled={active}
                    style={{ height: "40px" }}
                    disabled={loading}
                  >
                    {" "}
                    Nộp{" "}
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={2} />
        </Grid>
      </Dialog>
    </div>
  );
}

const getFileNameFormat = name => {
  if (name.length < 12) {
    return name;
  }
  return name.slice(0, 12) + "..."
}

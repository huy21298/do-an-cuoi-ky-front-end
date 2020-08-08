import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
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
import { toast } from "react-toastify";

import { useDispatch, useSelector } from "react-redux";
import {} from "../../actions/info-class.action";
import AxiosService from "../../services/axios.service";
import { getTokenFromLocal } from "../../reducers/token.reducer";
import { actGetExercisesReq } from "../../actions/exercises.action";

import { showToastSuccess } from '../../services/toast.service';

const { token } = getTokenFromLocal();

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
  const infoClass = useSelector((state) => state.infoClass);
  const [active, setActive] = React.useState(false);
  
  const nopBaiTap = async (e) => {
    console.log("infoClass", infoClass);
    console.log("exercise", exercise);
    setActive(true);

    try {
      const { data } = await AxiosService.postAuth(
        `/v1/bai-tap/nop-bai`,
        { lop_hoc_id: infoClass._id, bai_tap_id: exercise._id },
        token
      );
      if (data.success) {
        showToastSuccess(data.msg)
        dispatch(actGetExercisesReq(infoClass._id));
        handleClose();
      }
    } catch {
      setActive(false);
    } finally {
      setActive(false);
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
                    <div className="score">Đến hạn: {exercise.han_nop_bai}</div>
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
                  <label htmlFor="contained-button-file">
                    <Button
                      className="button send"
                      component="span"
                      startIcon={<CloudUploadIcon />}
                    >
                      Nộp bài tập
                    </Button>
                  </label>
                  <Button
                    className={styleButton}
                    onClick={nopBaiTap}
                    disabled={active}
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

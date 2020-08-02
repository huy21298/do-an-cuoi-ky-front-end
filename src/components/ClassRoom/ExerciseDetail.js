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
// import { TransitionProps } from "@material-ui/core/transitions";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

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

const Transition = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExerciseDetail({ open, handleClose }) {
  const classes = useStyles();

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
              Tên lớp học
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container component="section" className="exercis-detail">
          <Grid item md={2} />
          <Grid item md={8}>
            <Grid container spacing={4}>
              <Grid item md={8}>
                <div className="header">
                  <div className="title">Tiêu đề bài tập</div>
                  <div className="sub-title">Tên giáo viên - ngày đăng</div>
                  <div className="sub-sub-title">
                    <div className="score">10 điểm</div>
                    <div className="deadline">Đến hạn: 31 tháng 07, 2020</div>
                  </div>
                </div>
                <div className="border"></div>
                <div className="content">
                Bài tập nộp với định dạng <br />
              MSSV - Họ tên
                </div>
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
                  <Button className="button confirm"> Nộp </Button>
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

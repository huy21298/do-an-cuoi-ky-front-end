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
import Skeleton from "@material-ui/lab/Skeleton";

import { useDispatch, useSelector } from "react-redux";

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

export default function ExerciseDetail({
  open,
  handleClose,
  exercise,
  loading,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const infoClass = useSelector((state) => state.infoClass);
  const [active, setActive] = React.useState(false);

  const { ex_id: baiTap, lop_hoc_id: lopHoc } = exercise;

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
            {loading ? (
              <Skeleton
              animation="wave"
              height={30}
              width={60} />
            ) : (
              <Typography variant="h6" className={classes.title}>
                {lopHoc.tieu_de}
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        <Grid container component="section" className="exercis-detail">
          <Grid item md={2} />
          <Grid item md={8}>
            <Grid container spacing={4}>
              <Grid item md={8}>
                <div className="header">{
                  loading ? <Skeleton
                  animation="wave"
                  height={30}
                  width={120} /> : <div className="title">{baiTap.tieu_de}</div>
                }
                {
                  loading ? <Skeleton
                  animation="wave"
                  height={25}
                  width={100} /> : <div className="sub-title">
                  {baiTap.nguoi_tao_id?.hoten} - {baiTap.createdAt}
                </div>
                }
                
                <div className="sub-sub-title">
                {
                  loading ? <Skeleton
                  animation="wave"
                  height={25}
                  width={130} /> : <div className="deadline">
                  Đến hạn: {baiTap.han_nop_bai_format}
                </div>
                }

                {
                  loading ? <Skeleton
                  animation="wave"
                  height={25}
                  width={80} /> : 
                  <div className="score">{exercise.diem} điểm</div>
                }
                    
                  </div>
                </div>
                <div className="border"></div>
                {
                  loading ? <Skeleton
                  animation="wave"
                  height={50}
                  width={260} /> : 
                  <div className="content">{baiTap.noi_dung}</div>
                }
              </Grid>
              <Grid item md={4}>
                <Paper elevation={4} className="send-exercise">
                  <div className="header">
                    <div className="title">Bài tập của bạn</div>
                    <div className="status exercise-done">Đã nộp</div>
                  </div>
                  <Button
                    className="button send"
                    component="span"
                    startIcon={<CloudUploadIcon />}
                  >
                    Gửi khiếu nại
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

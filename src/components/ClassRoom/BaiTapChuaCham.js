import React, { useEffect } from "react";
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
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AxiosService from '../../services/axios.service';
import { showToastSuccess } from '../../services/toast.service';
import { actGetTokenFromLocal } from '../../actions/token.action';
import { actDeleteBaiTap } from '../../actions/exercises-finish.action';
import { dispatchError } from '../../actions/dispatch-error';

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
  loading,
  baiTap
}) {
  const {id: lop_hoc_id} = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { baiNop, baiTap: ctBaiNop} = baiTap;
  const { id: bai_tap_id } = ctBaiNop;
  const {token} = useSelector(state => state.token);
  
  useEffect(() => {
    dispatch(actGetTokenFromLocal());
  }, [token])

  const huyBaiTap = async (e) => {
    try {
      const { data } = await AxiosService.postAuth("/v1/bai-tap/huy-bai-tap", {lop_hoc_id, bai_tap_id}, token);
      if (data.success) {
        showToastSuccess(data.msg);
        dispatch(actDeleteBaiTap(bai_tap_id))
        handleClose();
      }
    } catch (error) {
      if (error?.status) {
        dispatchError(error.status, error.data, dispatch);
      }
    }
  }
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
                {ctBaiNop.lop_hoc_id.tieu_de}
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
                  width={120} /> : <div className="title">{ctBaiNop.tieu_de}</div>
                }
                {
                  loading ? <Skeleton
                  animation="wave"
                  height={25}
                  width={100} /> : <div className="sub-title">
                  {ctBaiNop.nguoi_tao_id.hoten} - {ctBaiNop.createdAt}
                </div>
                }
                
                <div className="sub-sub-title">
                {
                  loading ? <Skeleton
                  animation="wave"
                  height={25}
                  width={130} /> : <div className="deadline">
                  Đến hạn: {ctBaiNop.han_nop_bai_format}
                </div>
                }

                {
                  loading ? <Skeleton
                  animation="wave"
                  height={25}
                  width={80} /> : 
                  <div className="score">Chưa chấm</div>
                }
                    
                  </div>
                </div>
                <div className="border"></div>
                {
                  loading ? <Skeleton
                  animation="wave"
                  height={50}
                  width={260} /> : 
                  <div className="content">{ctBaiNop.noi_dung}</div>
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
                    {dinhDangBaiTap(baiNop.bai_nop)}
                  </Button>
                  <Button
                    className="button"
                    variant="contained"
                    color="secondary"
                    disableElevation
                    component="span"
                    onClick={huyBaiTap}
                  >
                    Hủy bài tập
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

const dinhDangBaiTap = name => {
  if (name.length < 12) return name;
  return name.slice(0, 12) + "...";
}

import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Skeleton from "@material-ui/lab/Skeleton";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import ExerciseDetail from "./ExerciseDetail";
import ExerciseFinishDetail from "./ExerciseFinishDetail";

import { actGetExamsFinishReq } from '../../actions/exercise-finish-detail.action';
import { actGetTokenFromLocal } from '../../actions/token.action';
import { actGetLoadingData } from '../../actions/loading-data.action';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
  })
);

const ExerciseItemFinish = ({ exercise, loading }) => {
  console.log('exercise finish', exercise);
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector(state => state.token);
  const exerciseFinishDetail = useSelector(state => state.exerciseFinishDetail);
  const loadingData = useSelector(state => state.loadingData);

  const { bai_tap_id: baiTap } = exercise;
  const [openExercise, setOpenExercise] = useState(false);

  const styleStatus = classnames({
    'exercise-status': true,
    'done': exercise.da_cham_diem,
    'in-process': !exercise.da_cham_diem
  });

  useEffect(() => {
    dispatch(actGetTokenFromLocal());
    dispatch(actGetLoadingData());
  }, []);

  const handleClose = () => {
    setOpenExercise(false);
  };
  const handleOpen = () => {
    dispatch(actGetExamsFinishReq(exercise.bai_tap_id.id, token.token));
    // setOpenExercise(true);

    if (loadingData === false) {
      setOpenExercise(true);
      console.log('openExercise')
    }
  };
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={4} lg={4} onClick={handleOpen}>
        <Card className={classes.root} elevation={3}>
          <div></div>
          <CardHeader
            avatar={getIcon(loading)}
            title={getTitle(loading, baiTap.tieu_de)}
            subheader={getDeadline(loading, baiTap.han_nop_bai_format)}
          />
          <CardContent>
            
              {getContent(loading, exercise.da_cham_diem, styleStatus)}
          </CardContent>
          <Divider />
        </Card>
      </Grid>
      <ExerciseFinishDetail open={openExercise} loading={loadingData} exercise={exerciseFinishDetail} handleClose={handleClose} />
    </React.Fragment>
  );
};

const getIcon = (loading) => {
  return loading ? (
    <Skeleton animation="wave" variant="circle" width={55} height={55} />
  ) : (
    <div className="wrap-icon">
      <CalendarTodayIcon class="icon-exam" />
    </div>
  );
};

const getTitle = (loading, title) => {
  return loading ? (
    <Skeleton
      animation="wave"
      height={30}
      width="80%"
      style={{ marginBottom: 6 }}
    />
  ) : (
    title
  );
};

const getDeadline = (loading, deadline) => {
  return loading ? (
    <Skeleton animation="wave" height={25} width="40%" />
  ) : (
    deadline
  );
};

const getContent = (loading, active, styleStatus) => {
  return loading ? (
    <Skeleton animation="wave" width="60%" />
  ) : (
    <span className={styleStatus}>
      {active ? "Đã chấm điểm" : "Chưa chấm điểm"}
    </span>
  );
};

export default ExerciseItemFinish;

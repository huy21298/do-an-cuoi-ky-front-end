import React, { FC, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import ExerciseDetail from './ExerciseDetail';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
  })
);

const ClassRoomItem = ({ baiThi }) => {
  const [openExercise, setOpenExercise] = useState(false);
  const classes = useStyles();
  const handleClose = () => {
    setOpenExercise(false);
  };
  const handleOpen = () => {
    setOpenExercise(true);
  };
  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6} lg={6} onClick={handleOpen}>
        <Card className={classes.root} elevation={3}>
          <div className="header-card"></div>
          <CardHeader
            avatar={<Avatar aria-label="recipe">R</Avatar>}
            title="Bài tập Bài tập....."
            subheader="22/22/20"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Bài thi hệ số 1 môn abc xyz, thời gian làm bài dự tính là
              aaxxaaccasdasd
            </Typography>
          </CardContent>
          <Divider />
        </Card>
      </Grid>
      <ExerciseDetail open={openExercise} handleClose={handleClose} />
    </React.Fragment>
  );
};

export default ClassRoomItem;

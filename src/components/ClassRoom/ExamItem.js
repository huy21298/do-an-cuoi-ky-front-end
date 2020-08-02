import React from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
  })
);

const ClassRoomItem = ({ baiThi }) => {
  const history = useHistory();
  const classes = useStyles();
  const onRedirectToTesting = () => {
    // history.push("/bai-thi/2");
  };
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} onClick={onRedirectToTesting}>
      <Card className={classes.root} elevation={3}>
        <div className="header-card"></div>
        <CardHeader avatar={
          <Avatar aria-label="recipe">
            R
          </Avatar>
        } title="Bài thi số 01" subheader="Ngày thi: 31/07/2020" />
        <CardActions disableSpacing>
          <Button size="large" color="primary">
            Đi đến bài thi
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ClassRoomItem;

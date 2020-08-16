import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Skeleton from "@material-ui/lab/Skeleton";
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
  })
);

const ClassRoomItem = ({ exam, loading }) => {
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const onRedirectToTesting = () => {
    history.push(`/${id}/bai-thi/${exam._id}`)
  };
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} onClick={onRedirectToTesting}>
      <Tooltip title={exam.tieu_de}>
        <Card className={classes.root} elevation={3}>
          <CardHeader
            avatar={getIcon(loading)}
            title={getTitle(loading, exam.tieu_de_format)}
            subheader={getDeadline(loading, exam.ngay_thi_format)}
          />
          <CardActions disableSpacing>
            {getBtnAction(loading)}
          </CardActions>
        </Card>
      </Tooltip>
    </Grid>
  );
};

const getIcon = (loading) => {
  return loading ? (
    <Skeleton animation="wave" variant="circle" width={55} height={55} />
  ) : (
    <div className="wrap-icon">
      <AssignmentIcon className="icon-exam" />
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
    "Ngày thi " + deadline
  );
};

const getBtnAction = (loading) => {
  return loading ? (
    <Skeleton animation="wave" height={30} width="50%" />
  ) : (
    <Button size="large" color="primary">
      Đi đến bài thi
    </Button>
  );
};

export default ClassRoomItem;

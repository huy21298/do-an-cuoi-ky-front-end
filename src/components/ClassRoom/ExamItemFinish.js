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
import classnames from 'classnames';

import { showToastError } from '../../services/toast.service';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      cursor: "pointer",
    },
  })
);

const ExamItemFinish = ({ exam, loading }) => {
  const { bai_thi_id: baiThi } = exam;
  const statusStyle = classnames({
    status: true,
    done: baiThi.da_cham_diem,
    "in-process": !baiThi.da_cham_diem
  })
  console.log('exam', exam);
  const history = useHistory();
  const { id } = useParams();
  const classes = useStyles();
  const onRedirectToTesting = () => {
    console.log('baiThi', baiThi)
    if (baiThi.da_cham_diem) {
    } else {
      showToastError("Bài thi chưa được chấm!")
    }
  };
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} onClick={onRedirectToTesting}>
      <Card className={classes.root} elevation={3}>
        <CardHeader
          avatar={getIcon(loading)}
          title={getTitle(loading, baiThi.tieu_de)}
          subheader={getDeadline(loading, baiThi.ngay_thi_format)}
        />
        <CardActions disableSpacing>
          <span className={statusStyle}>{baiThi.da_cham_diem ? "Đã chấm điểm" : "Chưa chấm điểm"}</span>
        </CardActions>
      </Card>
    </Grid>
  );
};

const getIcon = (loading) => {
  return loading ? (
    <Skeleton animation="wave" variant="circle" width={55} height={55} />
  ) : (
    <div className="wrap-icon">
      <AssignmentIcon class="icon-exam" />
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

export default ExamItemFinish;

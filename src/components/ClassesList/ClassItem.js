import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router";
import GroupIcon from "@material-ui/icons/Group";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import Tooltip from "@material-ui/core/Tooltip";
import Skeleton from "@material-ui/lab/Skeleton";
import Divider from "@material-ui/core/Divider";

const ClassRoomItem = ({ classItem, isLoading }) => {
  const history = useHistory();
  const goToClassRoom = (id) => () => {
    history.push(`/lop-hoc/${id}/bai-thi`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card className="class-item" elevation={2}>
        <CardHeader
          avatar={getAvatar(isLoading, classItem.anh_dai_dien)}
          title={getTitle(isLoading, classItem.tieu_de_format)}
          subheader={getSubTitle(isLoading, classItem.nguoi_tao_id.hoten)}
          onClick={goToClassRoom(classItem.id)}
        />
        <Divider />
        <Grid container>
          <Grid item md={10}>
            <CardActions disableSpacing>
              {getButtonsAction(isLoading)}
            </CardActions>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

const getAvatar = (isLoading, avatar) => {
  return isLoading ? (
    <Skeleton animation="wave" variant="circle" width={40} height={40} />
  ) : (
    <Avatar
      aria-label="recipe"
      src={avatar}
    />
  );
};

const getTitle = (isLoading, title) => {
  return isLoading ? (
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

const getSubTitle = (isLoading, teacherName) => {
  return isLoading ? (
    <Skeleton animation="wave" height={15} width="40%" />
  ) : (
    teacherName
  );
};

const getButtonsAction = (isLoading, _id) => {
  return isLoading ? (
    <React.Fragment>
      <Skeleton animation="wave" height={50} width="15%" />
      <Skeleton
        animation="wave"
        height={50}
        width="15%"
        style={{ marginLeft: 6 }}
      />
    </React.Fragment>
  ) : (
    <React.Fragment>
      <Tooltip title="Đi đến bài tập trong lớp">
        <IconButton>
          <CalendarTodayIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Đi đến danh sách bạn học">
        <IconButton>
          <GroupIcon />
        </IconButton>
      </Tooltip>
    </React.Fragment>
  );
};

export default ClassRoomItem;

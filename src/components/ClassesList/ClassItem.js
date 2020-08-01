import React, { useState } from "react";
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
import classnames from "classnames";


const ClassRoomItem = ({ classItem, isLoading }) => {
  const [isLoadingLoadData, setIsLoadingLoadData] = useState(false);

  const goToClassRoomDetail = () => {
    console.log("test");
    setIsLoadingLoadData(true);
  };

  // const classesLoader = {
  //   loader: true,
  //   active: isLoadingLoadData,
  // };

  // const classesItem = {
  //   "class-item": true,
  //   disabled: isLoadingLoadData
  // }

  return (
    <Grid item xs={12} sm={6} md={4} lg={4} onClick={goToClassRoomDetail}>
      <Card className="class-item" elevation={2}>
        <CardHeader
          avatar={getAvatar(isLoading)}
          title={getTitle(isLoading)}
          subheader={getSubTitle(isLoading)}
        />
        <Divider />
        <Grid container>
          <Grid item md={10}>
            <CardActions disableSpacing>
              {getButtonsAction(isLoading)}
            </CardActions>
          </Grid>
          {/* <Grid item md={2} component="article" className="loading-wrapper">
            <div className={classnames(classesLoader)}></div>
          </Grid> */}
        </Grid>
      </Card>
    </Grid>
  );
};

const getAvatar = (isLoading) => {
  return isLoading ? (
    <Skeleton animation="wave" variant="circle" width={40} height={40} />
  ) : (
    <Avatar
      aria-label="recipe"
      src="https://greendestinations.org/wp-content/uploads/2019/05/avatar-exemple.jpg"
    />
  );
};

const getTitle = (isLoading) => {
  return isLoading ? (
    <Skeleton
      animation="wave"
      height={10}
      width="80%"
      style={{ marginBottom: 6 }}
    />
  ) : (
    "Cấu trúc dữ liệu và thuật toán"
  );
};

const getSubTitle = (isLoading) => {
  return isLoading ? (
    <Skeleton animation="wave" height={10} width="40%" />
  ) : (
    "Vũ Đình Bảo"
  );
};

const getButtonsAction = (isLoading) => {
  return isLoading ? (
    <React.Fragment>
      <Skeleton animation="wave" height={15} width="15%" />
      <Skeleton
        animation="wave"
        height={15}
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

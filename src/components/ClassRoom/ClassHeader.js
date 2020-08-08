import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Skeleton from "@material-ui/lab/Skeleton";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { actGetInfoClassReq } from "../../actions/info-class.action";

const useStyles = makeStyles((theme) =>
  createStyles({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);

const ClassRoomHeader = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id } = useParams();
  const infoClass = useSelector((state) => state.infoClass);
  const loadingHeader = useSelector((state) => state.loadingHeader);
  useEffect(() => {
    dispatch(actGetInfoClassReq(id));
  }, []);

  return (
    <Grid container className="class-detail-page-header">
      <Grid item lg={3} />
      <Grid item xs={12} sm={12} md={12} lg={9}>
        <section className="class-detail-header">
          {getAvatar(loadingHeader, infoClass.nguoi_tao_id.anh_dai_dien, classes)}
          <section className="class-detail-summary">
            <article className="class-detail-title">
              {getTitle(loadingHeader, infoClass.tieu_de)}
            </article>
            <article className="class-detail-teacher-name">
              {getTeacherName(loadingHeader, infoClass.nguoi_tao_id.hoten)}
            </article>
          </section>
        </section>
      </Grid>
    </Grid>
  );
};

const getAvatar = (loading, avatar, classes) => {
  return loading ? (
    <Skeleton animation="wave" variant="circle" width={78} height={78} />
  ) : (
    <Avatar src={avatar} className={classes.large} />
  );
};

const getTitle = (loading, title) => {
  return loading ? (
    <Skeleton
      animation="wave"
      height={35}
      width={450}
      style={{ marginBottom: 6 }}
    />
  ) : (
    title
  );
};

const getTeacherName = (loading, name) => {
  return loading ? <Skeleton animation="wave" height={35} width="40%" /> : name;
}

export default ClassRoomHeader;

import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

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
  return (
    <Grid container className="class-detail-page-header">
      <Grid item lg={3} />
      <Grid item xs={12} sm={12} md={12} lg={9}>
        <section className="class-detail-header">
          <Avatar
            src="https://www.w3schools.com/w3images/avatar2.png"
            className={classes.large}
          />
          <section className="class-detail-summary">
            <article className="class-detail-title">
              Cấu trúc dữ liệu và thuật toán
            </article>
            <article className="class-detail-teacher-name">
              Nguyễn Thái Nhật Huy
            </article>
          </section>
        </section>
      </Grid>
    </Grid>
  );
};
export default ClassRoomHeader

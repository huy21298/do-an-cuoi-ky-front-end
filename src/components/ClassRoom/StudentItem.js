import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Skeleton from "@material-ui/lab/Skeleton";
import enviroment from '../../environments/enviroment';

const StudentItem = ({ student, loading }) => {
    console.log("student", student);
  return (
    <Grid item md={6}>
      <section className="student-item">
        <article className="student-avatar">
          {getAvatar(loading, `${enviroment.url.back_end}/avatar/${student.anh_dai_dien}`)}
        </article>
        <article className="student-name">
          {getName(loading, student.hoten)}
        </article>
      </section>
    </Grid>
  );
};

const getAvatar = (loading, avatar) => {
  return loading ? (
    <Skeleton animation="wave" variant="circle" width={50} height={50} />
  ) : (
      <Avatar src={avatar} alt="Ảnh đại diện" />
  );
};

const getName = (loading, name) => {
  return loading ? (
    <Skeleton
      animation="wave"
      height={30}
      width={180}
      style={{ marginBottom: 6 }}
    />
  ) : (
    name
  );
};

export default StudentItem;

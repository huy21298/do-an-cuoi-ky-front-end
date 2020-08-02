import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const ClassRoomNotice = () => {
  return (
    <Grid
      container
      component="section"
      className="classroom-student-list"
      spacing={2}
    >

      <Grid item md={6}>
        <section className="student-item">
          <article className="student-avatar">
            <Avatar
              src="https://www.w3schools.com/w3images/avatar6.png"
              alt=""
            />
          </article>
          <article className="student-name">Nguyễn Thái Nhật Huy</article>
        </section>
      </Grid>
    </Grid>
  );
};

export default ClassRoomNotice;

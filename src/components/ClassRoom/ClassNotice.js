import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ClassRoomNoticeClassList from "../ClassesList/ClassRoomNotice";

const ClassRoomNotice = () => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} component="section">
      <Paper
        elevation={0}
        square
        className="class-schedule paper-custom-schedule"
      >
        <div className="title">Sắp hết hạn</div>
        <section className="content">
          <ClassRoomNoticeClassList
            background="red"
            isMessage={false}
            message={{
              notice: "Bài tập về nhà 01",
              time: "T7 27-06 8:00 am",
            }}
          />
          <div className="mb-2" />
          <ClassRoomNoticeClassList
            background="green"
            isMessage={false}
            message={{
              notice: "Bài tập về nhà 01",
              time: "T7 27-06 8:00 am",
            }}
          />
        </section>
      </Paper>
    </Grid>
  );
};

export default ClassRoomNotice;

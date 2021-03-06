import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ClassRoomNoticeClassList from "../ClassesList/ClassRoomNotice";
import { actGetScheduleClassReq } from '../../actions/schedule.action';

const ClassRoomNotice = () => {
  const dispatch = useDispatch();
  const schedule = useSelector(state => state.schedule);
  const loading = useSelector(state => state.loading);
  const { id } = useParams();
  console.log('id', id);
  console.log('schedule', schedule);
  useEffect(() => {
    dispatch(actGetScheduleClassReq(id));
  }, [id])

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
              notice: schedule[0].tieu_de,
              time: schedule[0].ngay_thi_format || schedule[0]?.han_nop_bai_format,
            }}
          />
          <div className="mb-2" />
          <ClassRoomNoticeClassList
            background="red"
            isMessage={false}
            message={{
              notice: schedule[1]?.tieu_de || "",
              time: schedule[1]?.han_nop_bai_format || "",
            }}
          />
        </section>
      </Paper>
    </Grid>
  );
};

const mapNotice = schedules => {
  return schedules.map((item, index) => <ClassRoomNoticeClassList message={item} isMessage={false} key={index} />)
}

export default ClassRoomNotice;

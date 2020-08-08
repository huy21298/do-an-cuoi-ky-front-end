import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ExamItem from "./ExamItem";
import { actGetExamsReq } from "../../actions/exam.action";
import { actGetLoading } from "../../actions/loading.action";

const ClassRoomItemsList = () => {
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam);
  const loading = useSelector((state) => state.loading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetExamsReq(id));
    dispatch(actGetLoading());
  }, []);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {mapDataTesting(exam, loading)}
      </Grid>
    </section>
  );
};

const mapDataTesting = (exams, loading) => {
  return exams.map((item, index) => (
    <ExamItem key={index} exam={item} loading={loading} />
  ));
};

export default ClassRoomItemsList;

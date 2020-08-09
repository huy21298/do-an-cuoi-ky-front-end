import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ExamItem from "./ExamItem";
import ExamItemFinish from "./ExamItemFinish";
import { actGetExamsReq } from "../../actions/exam.action";
import { actGetExamsFinishReq } from "../../actions/exam-finish.action";
import { actGetLoading } from "../../actions/loading.action";

const ClassRoomItemsList = ({ typeExam }) => {
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam);
  const examFinish = useSelector((state) => state.examFinish);
  const loading = useSelector((state) => state.loading);
  const { id } = useParams();
  
  const actBaiThi = {
    "sap-toi": actGetExamsReq,
    "hoan-thanh": actGetExamsFinishReq,
    "khong-hoan-thanh": null,
  }

  useEffect(() => {
    const actGet = actBaiThi[typeExam];
    dispatch(actGet(id));
    dispatch(actGetLoading());
  }, [typeExam]);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {typeExam === "sap-toi" && mapDataTesting(exam, loading, typeExam)}
        {typeExam === "hoan-thanh" &&
          mapDataTesting(examFinish, loading, typeExam)}
      </Grid>
    </section>
  );
};

const mapDataTesting = (exams, loading, type) => {
  const Item = type === "sap-toi" ? ExamItem : ExamItemFinish;
  return exams.map((item, index) => (
    <Item key={index} exam={item} loading={loading} />
  ));
};

export default ClassRoomItemsList;

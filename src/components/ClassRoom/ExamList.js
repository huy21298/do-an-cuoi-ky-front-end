import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ExamItem from "./ExamItem";
import ExamItemFinish from "./ExamItemFinish";
import ExamItemNotFinish from "./ExamItemNotFinish";
import { actGetExamsReq } from "../../actions/exam.action";
import { actGetExamsFinishReq } from "../../actions/exam-finish.action";
import { actGetLoading } from "../../actions/loading.action";
import { actGetExamsNotFinishReq } from "../../actions/exam-not-finish.action";
import { actGetTokenFromLocal } from "../../actions/token.action";

const ClassRoomItemsList = ({ typeExam }) => {
  const dispatch = useDispatch();
  const exam = useSelector((state) => state.exam);
  const examFinish = useSelector((state) => state.examFinish);
  const examNotFinish = useSelector((state) => state.examNotFinish);
  const loading = useSelector((state) => state.loading);
  const { token } = useSelector((state) => state.token);
  const { id } = useParams();

  const actBaiThi = {
    "sap-toi": actGetExamsReq,
    "hoan-thanh": actGetExamsFinishReq,
    "khong-hoan-thanh": actGetExamsNotFinishReq,
  };

  console.log('examNotFinish', examNotFinish);
  console.log('typeExam', typeExam);

  useEffect(() => {
    const actGet = actBaiThi[typeExam];
    dispatch(actGetTokenFromLocal());
    dispatch(actGet(id, token));
    dispatch(actGetLoading());
  }, [typeExam, token]);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {typeExam === "sap-toi" && mapDataTesting(exam, loading, typeExam)}
        {typeExam === "hoan-thanh" &&
          mapDataTesting(examFinish, loading, typeExam)}
        {typeExam === "khong-hoan-thanh" &&
          mapDataTesting(examNotFinish, loading, typeExam)}
      </Grid>
    </section>
  );
};

const mapDataTesting = (exams, loading, type) => {
  const loai = {
    "sap-toi": ExamItem,
    "hoan-thanh": ExamItemFinish,
    "khong-hoan-thanh": ExamItemNotFinish,
  };
  const Item = loai[type];
  return exams.map((item, index) => (
    <Item key={index} exam={item} loading={loading} />
  ));
};

export default ClassRoomItemsList;

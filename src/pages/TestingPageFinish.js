import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";

import Confirm from "../components/Testing/Confirm";
import Testing from "../components/Testing/Testing";

import { actGetExamReq } from "../actions/exam-detail.action";

import "../styles/testing-page.scss";
import { actGetCode } from "../actions/error-test.action";

const getDate = (time) => {
  const now = new Date().getTime();
  const countDown = new Date().setSeconds(time);
  const distance = countDown - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

const TestingPageFinish = () => {
  const dispatch = useDispatch();
  const examDetail = useSelector((state) => state.examDetail);
  const { bai_thi_id, lop_hoc_id } = useParams();

  useEffect(() => {
    dispatch(actGetExamReq(bai_thi_id));
    dispatch(actGetCode());
  }, []);

  return (
    <Container component="section" className="testing-page">
      <Testing
        time={examDetail.thoi_gian_thi}
        date={examDetail.ngay_thi_format}
        questions={examDetail.ds_cau_hoi}
        exam={examDetail}
      />
    </Container>
  );
};

export default TestingPageFinish;

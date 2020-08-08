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

const TheTestingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const examDetail = useSelector((state) => state.examDetail);
  const errorTest = useSelector((state) => state.errorTest);
  const [date, setDate] = useState(getDate(errorTest?.time || 0));
  const [confirm, setConfirm] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetExamReq(id));
    dispatch(actGetCode());

    errorTest.time && setDate(errorTest.time);
  }, []);

  const directToTesting = e => {
    setConfirm(true);
  }

  const cancel = e => {
    history.goBack();
  }

  return (
    <Container component="section" className="testing-page">
      {errorTest.code === "SOON" && <div>SOON {date.seconds}</div>}
      {errorTest.code === "LEFT" && <div>LEFT</div>}

      {errorTest.code === "NONE" && confirm && (
        <Testing
          time={examDetail.thoi_gian_thi}
          date={examDetail.ngay_thi_format}
          questions={examDetail.ds_cau_hoi}
          exam={examDetail}
        />
      )}
      {errorTest.code === "NONE" && !confirm && <Confirm directToTesting={directToTesting} cancel={cancel} />}
    </Container>
  );
};

export default TheTestingPage;

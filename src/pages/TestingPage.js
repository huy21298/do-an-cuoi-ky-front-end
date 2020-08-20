import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import Confirm from "../components/Testing/Confirm";
import Testing from "../components/Testing/Testing";
import CounDown from '../components/Testing/CountDown';
import TimeLeftPage from './TimeLeftPage';

import { actGetExamReq } from "../actions/exam-detail.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";
import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";
import { actSetIDClass } from "../actions/class-id.action";

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
  const { bai_thi_id, lop_hoc_id } = useParams();
  const {ngay_thi: ngayThi} = errorTest;

  useEffect(() => {
    dispatch(actGetExamReq(bai_thi_id));
    dispatch(actGetCode());
    dispatch(actSetIsDisplayHeader(true));
    dispatch(actSetIsDisplayTab(true));
    errorTest.time && setDate(errorTest.time);
    dispatch(actSetIDClass(lop_hoc_id));

    document.title = "Kiểm tra"
  }, []);

  const directToTesting = e => {
    setConfirm(true);
  }

  const cancel = e => {
    history.goBack();
  }

  return (
    <Container component="section" className="testing-page">
      {errorTest.code === "SOON" && <CounDown ngayThi={ngayThi} />}
      {errorTest.code === "LEFT" && <TimeLeftPage />}

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

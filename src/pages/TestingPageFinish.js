import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Testing from "../components/Testing/Testing";

import { actGetExamReq } from "../actions/exam-detail.action";
import { actGetCode } from "../actions/error-test.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";
import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";
import { actSetIDClass } from "../actions/class-id.action";

import "../styles/testing-page.scss";

const TestingPageFinish = () => {
  const dispatch = useDispatch();
  const examDetail = useSelector((state) => state.examDetail);
  const { bai_thi_id, lop_hoc_id } = useParams();

  useEffect(() => {
    dispatch(actGetExamReq(bai_thi_id));
    dispatch(actGetCode());
    dispatch(actSetIsDisplayHeader(true));
    dispatch(actSetIsDisplayTab(true));
    dispatch(actSetIDClass(lop_hoc_id));
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

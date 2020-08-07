import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import LeftSection from '../components/Testing/LeftSection';
import RightSection from '../components/Testing/RightSection';

import { actGetExamReq } from '../actions/exam-detail.action';

import "../styles/testing-page.scss";

const TheTestingPage = () => {
    const dispatch = useDispatch();
    const examDetail = useSelector(state => state.examDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(actGetExamReq(id))
    }, []);

    useEffect(() => {
        console.log('examDetail', examDetail)
    }, [examDetail])

  return (
    <Container component="section" className="testing-page">
      <Grid container component="section">
        <Grid item md={4} component="section">
          <LeftSection time={examDetail.thoi_gian_thi} questions={examDetail.ds_cau_hoi} />
        </Grid>

        <Grid item md={8} component="section">
          <RightSection exam={examDetail} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TheTestingPage;
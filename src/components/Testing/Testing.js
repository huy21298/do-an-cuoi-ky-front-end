import React, { useEffect } from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from 'react-redux';
import { actSetIsDisplayHeader } from '../../actions/display-header.action';

const Testing = ({ time, date, questions, exam }) => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actSetIsDisplayHeader(false));
  }, [])

  return (
    <Grid container component="section">
      <Grid item md={4} component="section">
        <LeftSection time={time} date={date} questions={questions} />
      </Grid>

      <Grid item md={8} component="section">
        <RightSection exam={exam} />
      </Grid>
    </Grid>
  );
};

export default Testing;

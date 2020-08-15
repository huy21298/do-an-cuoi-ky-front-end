import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Grid from "@material-ui/core/Grid";

const Testing = ({ time, date, questions, exam }) => {
  console.log('question', questions);
  console.log('exam', exam);
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

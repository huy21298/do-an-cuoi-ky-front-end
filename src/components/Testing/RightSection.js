import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpIcon from "@material-ui/icons/Help";

import Question1 from "./Question1";
import Question2 from "./Question2";

const RightSection = ({ exam }) => {

  const [examSend, setExamSend] = useState([]);

  const handleExamSend = (exam) => {
    const index = findIndex(exam._id, examSend);
    if (index === -1) {
      setExamSend([...examSend, exam])
    } else {
      
    }
  }

  return (
    <div className="testing-page-right">
      <Grid container className="header">
        <Grid item md={2} />
        <Grid component="header" item md={9}>
          <section className="first-title">
            <span className="upper-case">{exam.tieu_de}</span>
          </section>
          <section className="second-title">
            <div className="test-minutes">
              {exam.thoi_gian_thi} phút <AccessTimeIcon />
            </div>
            <div className="count-question">
              {exam.ds_cau_hoi.length} câu hỏi <HelpIcon />
            </div>
          </section>
        </Grid>
        <Grid item md={1} />
      </Grid>
      <section className="body">
        {mapQuestions(exam.ds_cau_hoi, handleExamSend)}
      </section>
    </div>
  );
};

const mapQuestions = (questions, handleExamSend) => {
  return questions.map((item, index) => {
    const Question = item.loai === "TracNghiem" ? Question1 : Question2
    return <Question question={item} key={index} handleExamSend={handleExamSend} index={index + 1} />
  })
}

const findIndex = (id, exam) =>  exam.findIndex(item => item.cau_hoi_id === id);

export default RightSection;
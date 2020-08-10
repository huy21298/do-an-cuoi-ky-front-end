import React from "react";
import TextField from "@material-ui/core/TextField";
import { useSelector, useDispatch } from "react-redux";

import { actSetExamSend } from "../../actions/send-exam.action";

const Question2 = ({ question, index }) => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const sendQuestion = {
      cau_hoi_id: question.cau_hoi_id._id,
      loai: question.loai,
      dap_an: e.target.value,
    };
    dispatch(actSetExamSend(sendQuestion));
  };

  return (
    <section className="question-item" id={`q${index}`}>
      <div className="title" id={`title-${index}`}>
        <span className="question-number" id={`question-number-${index}`}>Câu {index}:</span>
        <span className="score" id={`score-${index}`}>({question.cau_hoi_id.diem} điểm)</span>
        <span className="content" id={`content-${index}`}>{question.cau_hoi_id.noi_dung}</span>
      </div>
      <section className="answere type1" id={`answere-a ${index}`}>
        <TextField
          id={`outlined-multiline-static id-${index}`}
          label="Đáp án"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          onChange={onChange}
        />
      </section>
    </section>
  );
};

export default Question2;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actSetExamSend } from "../../actions/send-exam.action";
import AnswereItem from "./AnswereItem";

const Question1 = ({ question, index }) => {
  const dispatch = useDispatch();
  const [currentQuestion, setcurrentQuestion] = useState("");
  const tick = (dap_an_id) => (e) => {
    setcurrentQuestion(dap_an_id);
    const sendQuestion = {
      cau_hoi_id: question.cau_hoi_id._id,
      loai: question.loai,
      dap_an: dap_an_id,
    };
    dispatch(actSetExamSend(sendQuestion));
  };
  return (
    <section className="question-item" id={`q${index}`}>
      <div className="title" id={`q${index}-title`}>
        <span className="question-number" id={`q${index}-question-number`}>Câu {index}:</span>
        <span className="score" id={`q${index}-score`}>({question.cau_hoi_id.diem} điểm)</span>
        <span className="content" id={`q${index}-content`}>{question.cau_hoi_id.noi_dung}</span>
      </div>
      <section className="answere type1" id={`q${index}answere`}>
        {mapAnswere(question.cau_hoi_id.lua_chon, tick, currentQuestion)}
      </section>
    </section>
  );
};

const mapAnswere = (answeres, tick, currentQuestion) => {
  return answeres.map((item, index) => {
    return (
      <AnswereItem
        answere={item}
        tick={tick}
        key={index}
        index={index}
        currentQuestion={currentQuestion}
      />
    );
  });
};

export default Question1;

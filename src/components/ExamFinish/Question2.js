import React from "react";
import classnames from "classnames";
import TextField from "@material-ui/core/TextField";
import Skeleton from "@material-ui/lab/Skeleton";

const Question2 = ({ cauHoi, index, loading }) => {
  const {
    dung_sai: dungSai,
    cau_tra_loi: cauTraLoi,
    cau_hoi_id: ctCauHoi,
  } = cauHoi;
  const questionItemStyle = classnames({
    "question-item": true,
    wrong: dungSai === false,
    exact: dungSai === true,
  });
  return (
    <section className={questionItemStyle} id={`q${index}`}>
      <div className="title" id={`title-$`}>
        {loading ? (
          <Skeleton
            animation="wave"
            height={30}
            width="60%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          "Câu" + index
        )}
        <span className="score" id={`score-`}>
          {ctCauHoi.diem} điểm
        </span>
        <span className="content" id={`content-`}>
          {ctCauHoi.noi_dung}
        </span>
      </div>
      <section className="answere type1" id={`answere-a `}>
        <TextField
          error={!dungSai}
          id={`outlined-multiline-static id-`}
          label="Đáp án"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          value={cauTraLoi}
          disabled
          className="text-error"
        />
      </section>
    </section>
  );
};

export default Question2;

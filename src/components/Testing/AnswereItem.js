import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";


const AnswereItem = ({ answere, tick, currentQuestion, index }) => {
  return (
    <div className="answere-item" id={`answere-item${index}`}>
      <span className="tick-icon" id={`tick-icon${index}`}>
        {currentQuestion === answere.id ? (
          <CheckCircleOutlineIcon className="tick" id={`tick${index}`} onClick={tick(answere.id)} />
        ) : (
          <RadioButtonUncheckedIcon
            className="un-tick"
            id={`un-tick${index}`}
            onClick={tick(answere.id)}
          />
        )}
      </span>
      <span className="content" id={`content${index}`}>{answere.label}</span>
    </div>
  );
};

export default AnswereItem;

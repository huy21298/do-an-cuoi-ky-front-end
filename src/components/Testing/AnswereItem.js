import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";


const AnswereItem = ({ answere, tick, currentQuestion }) => {
  return (
    <div className="answere-item">
      <span className="tick-icon">
        {currentQuestion === answere.id ? (
          <CheckCircleOutlineIcon className="tick" onClick={tick(answere.id)} />
        ) : (
          <RadioButtonUncheckedIcon
            className="un-tick"
            onClick={tick(answere.id)}
          />
        )}
      </span>
      <span className="content">{answere.label}</span>
    </div>
  );
};

export default AnswereItem;

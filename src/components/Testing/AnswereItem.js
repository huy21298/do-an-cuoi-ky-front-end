import React, { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
const AnswereItem = () => {
  const [tick, setTick] = useState(false);
  const onTick = () => {
    setTick(true);
  };
  const onUnTick = () => {
    setTick(false);
  };
  return (
    <div className="answere-item">
      <span className="tick-icon">
        {!tick && (
          <RadioButtonUncheckedIcon className="un-tick" onClick={onTick} />
        )}
        {tick && <CheckCircleOutlineIcon className="tick" onClick={onUnTick} />}
      </span>
      <span className="content">Guido Van rossum</span>
    </div>
  );
};

export default AnswereItem;
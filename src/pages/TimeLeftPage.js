import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ClockImg from "../images/time-left.png";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actSetIsDisplayHeader } from "../actions/display-header.action";
import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";

import "../styles/time-left.scss";

const TimeLeftPage = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actSetIsDisplayHeader(true));
    dispatch(actSetIsDisplayTab(true));

    document.title = "Chưa tới giờ thi"
  }, []);
  const history = useHistory();
  return (
    <div className="time-left">
      <div className="title">Đã quá thời gian làm bài</div>
      <img src={ClockImg} width="25%" height="25%" alt="" />
      <Button
        onClick={(e) => history.goBack()}
        variant="contained"
        startIcon={<ArrowBackIcon />}
        color="secondary"
        disableElevation
      >
        Quay lại trang lớp học
      </Button>
    </div>
  );
};

export default TimeLeftPage;

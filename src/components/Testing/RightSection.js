import React from "react";
import Grid from "@material-ui/core/Grid";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpIcon from "@material-ui/icons/Help";

import Question1 from "./Question1";
import Question2 from "./Question2";

const RightSection = () => {
  return (
    <div className="testing-page-right">
      <Grid container className="header">
        <Grid item md={2} />
        <Grid component="header" item md={9}>
          <section className="first-title">
            Kiểm tra 1 tiết:&nbsp;
            <span className="upper-case">CẤU TRÚC DỮ LIỆU VÀ THUẬT TOÁN</span>
          </section>
          <section className="second-title">
            <div className="test-minutes">
              55 phút <AccessTimeIcon />
            </div>
            <div className="count-question">
              40 câu hỏi <HelpIcon />
            </div>
          </section>
        </Grid>
        <Grid item md={1} />
      </Grid>
      <section className="body">
        <Question1 />
        <Question2 />
      </section>
    </div>
  );
};

export default RightSection;
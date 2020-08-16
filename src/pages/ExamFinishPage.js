import React, { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ReportIcon from "@material-ui/icons/Report";
import Button from "@material-ui/core/Button";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import classnames from 'classnames';

import Question1 from "../components/ExamFinish/Question1";
import Question2 from "../components/ExamFinish/Question2";

import { actGetTokenFromLocal } from "../actions/token.action";
import { actGetExamFinishDetailReq } from "../actions/exam-finish-detail.action";
import { actGetLoading } from "../actions/loading.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";
import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";
import { actSetIDClass } from "../actions/class-id.action";

import "../styles/testing-page.scss";

const ExamFinishPage = () => {
  const dispatch = useDispatch();
  const { lop_hoc_id, bai_thi_id } = useParams();

  const { token } = useSelector((state) => state.token);
  const examFinishDetail = useSelector((state) => state.examFinishDetail);
  const loading = useSelector((state) => state.loading);
  const { bai_thi: baiThi, ct_bai_thi: ctBaiThi } = examFinishDetail;


  useEffect(() => {
    dispatch(actGetTokenFromLocal());
    dispatch(actGetExamFinishDetailReq(lop_hoc_id, bai_thi_id, token));
    dispatch(actGetLoading());
    dispatch(actSetIsDisplayTab(true));
    dispatch(actSetIsDisplayHeader(true))
    dispatch(actSetIDClass(lop_hoc_id));
  }, [token]);

  return (
    <Container component="section" className="testing-page">
      <Grid container component="section">
        <Grid item md={4} component="section">
          <div className="testing-page-left">
            <header className="header">
              <div className="title">Kết quả</div>
              <span className="count-down">{baiThi.diem} điểm</span>
            </header>
            <section className="body">
              <article className="question-list">
                {mapSoCau(baiThi.chi_tiet_bai_lam)}
              </article>
              <article className="button-group">
                <Button className="button report" startIcon={<ReportIcon />}>
                  Khiếu nại
                </Button>
              </article>
            </section>
            <footer className="footer">
              <div className="content">Thí sinh: {baiThi.sinh_vien_id.hoten}</div>
              <div className="content">Mã sinh viên: {baiThi.sinh_vien_id.ma_sv}</div>
              <div className="content">Ngày thi: {ctBaiThi.ngay_thi_format}</div>
              <div className="content">Tổng số câu: {baiThi.chi_tiet_bai_lam.length}</div>
            </footer>
          </div>
        </Grid>

        <Grid item md={8} component="section">
          <div className="testing-page-right">
            <Grid container className="header">
              <Grid item md={2} />
              <Grid component="header" item md={9}>
                <section className="first-title">
                  <span className="upper-case">{ctBaiThi.tieu_de}</span>
                </section>
                <section className="second-title">
                  <div className="test-minutes">
                    {ctBaiThi.thoi_gian_thi} phút <AccessTimeIcon />
                  </div>
                  <div className="count-question mr-1">
                    {soCauDung(baiThi.chi_tiet_bai_lam)} câu đúng{" "}
                    <CheckCircleOutlineIcon style={{ color: "green" }} />
                  </div>
                  <div className="count-question">
                  {soCauSai(baiThi.chi_tiet_bai_lam)} câu sai <HighlightOffIcon style={{ color: "red" }} />
                  </div>
                </section>
              </Grid>
              <Grid item md={1} />
            </Grid>
            <section className="body">
              {mapCauHoi(baiThi.chi_tiet_bai_lam, loading)}
            </section>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const mapSoCau = baiThi => {
  
  return baiThi.map((item, index) => {
    const style = classnames({
      "question-item": true,
      "wrong": !item.dung_sai,
      "exact": item.dung_sai
    })
    return <a href={`#q${index + 1}`} className={style}>
    {index + 1}
  </a>
  })
}

const soCauDung = baiThi => {
  return baiThi.filter(item => item.dung_sai === true).length;
}

const soCauSai = baiThi => {
  return baiThi.filter(item => item.dung_sai === false).length;
}

const mapCauHoi = (baiThi, loading) => {
  return baiThi.map((item, index) => {
    const CauHoi = item.loai === "TracNghiem" ? Question1 : Question2;
    return <CauHoi cauHoi={item} key={index} index={index + 1} loading={loading} />
  })
}

export default ExamFinishPage;

import React, { useEffect } from "react";
import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch, useSelector } from 'react-redux';
import { actSetInfoReq } from "../../actions/info.action";

const LeftSection = ({ questions, date }) => {
  const dispatch = useDispatch();
  const info = useSelector(state => state.info);

  useEffect(() => {
    dispatch(actSetInfoReq());
  }, [])

  return (
    <div className="testing-page-left">
      <header className="header">
        <div className="title">Thời gian còn lại</div>
        <span className="count-down">39:33</span>
      </header>
      <section className="body">
        <article className="question-list">
          {mapQuestion(questions)}
        </article>
        <article className="button-group">
          <Button className="button send" startIcon={<SendIcon />}>Nộp bài</Button>
          <Button className="button report" startIcon={<ReportIcon />}>Báo cáo</Button>
        </article>
      </section>
      <footer className="footer">
        <div className="content">Thí sinh: {info.hoten}</div>
        <div className="content">Mã sinh viên: {info.ma_sv}</div>
        <div className="content">Ngày thi: {date}</div>
        {/* <div className="content">Môn thi: Thuật toán</div> */}
      </footer>
    </div>
  );
};

const mapQuestion = questions => {
  return questions.map((item, index) => <a href={`#q${index + 1}`} key={index} className="question-item">{index + 1}</a>)
}

export default LeftSection;
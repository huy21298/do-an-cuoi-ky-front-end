import React from "react";
import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';
import SendIcon from '@material-ui/icons/Send';;

const LeftSection = () => {
  return (
    <div className="testing-page-left">
      <header className="header">
        <div className="title">Thời gian còn lại</div>
        <span className="count-down">39:33</span>
      </header>
      <section className="body">
        <article className="question-list">
          <a href="#q1" className="question-item">1</a>
          <a href="#q2" className="question-item">1</a>
          <a href="#q3" className="question-item">1</a>
          <a href="#q4" className="question-item">1</a>
          <a href="#q5" className="question-item">1</a>
          
        </article>
        <article className="button-group">
          <Button className="button send" startIcon={<SendIcon />}>Nộp bài</Button>
          <Button className="button report" startIcon={<ReportIcon />}>Báo cáo</Button>
        </article>
      </section>
      <footer className="footer">
        <div className="content">Thí sinh: Nguyễn Thái Nhật Huy</div>
        <div className="content">Lớp: CDTH17B</div>
        <div className="content">Ngày thi: 20/06/20202</div>
        <div className="content">Môn thi: Thuật toán</div>
      </footer>
    </div>
  );
};

export default LeftSection;
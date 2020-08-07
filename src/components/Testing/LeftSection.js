import React from "react";
import Button from '@material-ui/core/Button';
import ReportIcon from '@material-ui/icons/Report';
import SendIcon from '@material-ui/icons/Send';;

const LeftSection = ({ questions }) => {
  console.log('questions', questions)
  return (
    <div className="testing-page-left">
      <header className="header">
        <div className="title">Thời gian còn lại</div>
        <span className="count-down">39:33</span>
      </header>
      <section className="body">
        <article className="question-list">
          {loopQuestion(questions)}
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

const loopQuestion = questions => {
  return questions.map((item, index) => <a href={`#q${index + 1}`} key={index} className="question-item">{index + 1}</a>)
}

export default LeftSection;
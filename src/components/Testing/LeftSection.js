import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import ReportIcon from "@material-ui/icons/Report";
import SendIcon from "@material-ui/icons/Send";
import classnames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actSetInfoReq } from "../../actions/info.action";
import { actGetExamSend } from "../../actions/send-exam.action";
import { actGetIDClass } from "../../actions/class-id.action";
import AxiosService from "../../services/axios.service";
import { getTokenFromLocal } from "../../reducers/token.reducer";
import DialogAgree from "./DialogAgree";
import DialogMessage from "../DialogMessage";

const LeftSection = ({ questions, date }) => {
  const dispatch = useDispatch();
  const { lop_hoc_id, bai_thi_id } = useParams();
  const info = useSelector((state) => state.info);
  const sendExam = useSelector((state) => state.sendExam);
  const { token } = getTokenFromLocal();
  const [isLoading, setLoading] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    dispatch(actSetInfoReq());
    dispatch(actGetExamSend());
    dispatch(actGetIDClass());
    console.log('lop_hoc_id', lop_hoc_id)
  }, []);

  const sendToExam = async (e) => {
    const countBaiThi = questions.length;
    const baiThiSinhVien = sendExam.length;

    const blank = sendExam.some(item => item.dap_an.length < 1);

    if (countBaiThi > baiThiSinhVien || blank) {
      setOpenDialog(true);
      setMsg("Bài thi chưa được hoàn thành, hãy điền đáp án và thử lại");
    } else {
      setLoading(true);
      const sendData = {
        bai_thi_id,
        sinh_vien_id: info._id,
        lop_hoc_id,
        bai_thi_sinh_vien: sendExam,
        da_cham: false
      };
      const jsonData = JSON.stringify(sendData);
      try {
        const { data } = await AxiosService.postAuth(
          "/v1/bai-thi/nop-bai",
          { bai_thi: jsonData },
          token
        );
        if (data.success) {
          setLoading(false);
          setOpen(true);
          setMsg(data.msg);
        }
      } catch (e) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };

  const styleBtnSend = classnames({
    button: true,
    send: true,
    loading: isLoading,
  });

  return (
    <>
      <div className="testing-page-left">
        <header className="header">
          <div className="title">Thời gian còn lại</div>
          <span className="count-down">39:33</span>
        </header>
        <section className="body">
          <article className="question-list">{mapQuestion(questions)}</article>
          <article className="button-group">
            <Button
              className={styleBtnSend}
              startIcon={<SendIcon />}
              onClick={sendToExam}
              disabled={isLoading}
            >
              Nộp bài
            </Button>
            <Button className="button report" startIcon={<ReportIcon />}>
              Báo cáo
            </Button>
          </article>
        </section>
        <footer className="footer">
          <div className="content">Thí sinh: {info.hoten}</div>
          <div className="content">Mã sinh viên: {info.ma_sv}</div>
          <div className="content">Ngày thi: {date}</div>
          {/* <div className="content">Môn thi: Thuật toán</div> */}
        </footer>
      </div>
      <DialogAgree open={isOpen} msg={msg} />
      <DialogMessage open={openDialog} message={msg} handleCloseDialog={() => setOpenDialog(false)} />
    </>
  );
};

const mapQuestion = (questions) => {
  return questions.map((item, index) => (
    <a href={`#q${index + 1}`} key={index} className="question-item">
      {index + 1}
    </a>
  ));
};

export default LeftSection;

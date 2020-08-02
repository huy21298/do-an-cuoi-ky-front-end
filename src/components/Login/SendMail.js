import React from 'react';
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const SendMail = (props) => {

  return (
    <div className="send-mail" style={{height: "100%"}}>
      <div className="content">
        <div className="icon-content">
          <MailOutlineIcon className="icon" style={{fontSize: "60px"}} />
        </div>
        <div className="title">Đã gửi email xác minh</div>
        <div className="description">
          Vui lòng kiểm tra hộp thư đến để nhận được hướng dẫn đổi mật khẩu
        </div>
      </div>
      <footer className="footer-forgot-password send-mail">
        Không nhận được mail? <span className="recieve-mail">Gửi lại</span>
      </footer>
    </div>
  );
};

export default SendMail;

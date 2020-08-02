import React, { FC, CSSProperties } from "react";

const ClassRoomNotice = ({ background, isMessage, message }: BgProps) => {
  const bgLeftNotice = {
    background
  };
  return (
    <div className="classroom-notice">
      <div className="left" style={bgLeftNotice} />
      <div className="right">
      <div className="notice-title">{message.notice}</div>
      { !isMessage && <div className="notice-content">{message.time}</div>}
      </div>
    </div>
  );
};

export default ClassRoomNotice;

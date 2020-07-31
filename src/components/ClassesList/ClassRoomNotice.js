import React, { FC, CSSProperties } from "react";

interface BgProps {
  background: string;
  isMessage: boolean,
  message: {
    notice: string,
    time?: string
  }
}

const ClassRoomNotice: FC<BgProps> = ({ background, isMessage, message }: BgProps) => {
  const bgLeftNotice: CSSProperties = {
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

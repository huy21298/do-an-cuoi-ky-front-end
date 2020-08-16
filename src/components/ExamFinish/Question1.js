import React from "react";
import classnames from "classnames";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RadioButtonUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Skeleton from "@material-ui/lab/Skeleton";

const Question1 = ({ cauHoi, index, loading }) => {
  const {
    cau_hoi_id: ctCauHoi,
    dung_sai: dungSai,
    cau_tra_loi: cauTraLoi,
  } = cauHoi;
  const { dap_an: dapAn } = ctCauHoi;
  console.log("loading", loading);
  const questionItemStyle = classnames({
    "question-item": true,
    wrong: dungSai === false,
    exact: dungSai === true,
  });
  return (
    <section className={questionItemStyle} id={`q${index}`}>
      <div className="title" id={`q-title`}>
        <span className="question-number" id={`q-question-number`}>
          {loading ? (
            <Skeleton
              animation="wave"
              height={30}
              width="30%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            "Câu" + index
          )}
        </span>
        {!loading && (
          <span className="score" id={`q-score`}>
            {ctCauHoi.diem} điểm
          </span>
        )}
        {loading ? (
          <Skeleton
            animation="wave"
            height={30}
            width="50%"
            style={{ marginBottom: 6 }}
          />
        ) : (
          <span className="content" id={`q-content`}>
            {ctCauHoi.noi_dung}
          </span>
        )}
      </div>
      <section className="answere type1" id={`qanswere`}>
        {mapLuaChon(ctCauHoi.lua_chon, dungSai, cauTraLoi, dapAn.id)}
      </section>
    </section>
  );
};

const CheckedIcon = <CheckCircleOutlineIcon className="tick" />;
const UnCheckIcon = <RadioButtonUnchecked className="un-tick" />;
const WrongIcon = <HighlightOffIcon className="wrong" />;

const mapLuaChon = (luaChon, laCauDung, cauTraLoi, dapAn) => {
  return luaChon.map((item, index) => {
    let Icon = UnCheckIcon;
    if (item.id === cauTraLoi && laCauDung) {
      Icon = CheckedIcon;
    } else if (item.id === cauTraLoi && laCauDung === false) {
      Icon = WrongIcon;
    } else if (
      item.id !== cauTraLoi &&
      laCauDung === false &&
      item.id === dapAn
    ) {
      Icon = CheckedIcon;
    }
    return <Answere luaChon={item} key={index} Icon={Icon} />;
  });
};

const Answere = ({ luaChon, Icon }) => {
  return (
    <div className="answere-item" id={`answere-ite`}>
      <span className="tick-icon" id={`tick-icon`}>
        {Icon}
      </span>
      <span className="content" id={`content`}>
        {luaChon.label}
      </span>
    </div>
  );
};

export default Question1;

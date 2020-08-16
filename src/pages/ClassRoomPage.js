import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import SearchIcon from "@material-ui/icons/Search";

import ClassHeader from "../components/ClassRoom/ClassHeader";
import ClassNotice from "../components/ClassRoom/ClassNotice";
import StudentList from "../components/ClassRoom/StudentList";
import ExamList from "../components/ClassRoom/ExamList";
import ExercisesList from "../components/ClassRoom/ExercisesList";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";
import { actSetIDClass } from "../actions/class-id.action";

import "../styles/class-detail-page.scss";
import "../styles/common.scss";

const ClassDetailPage = () => {
  const { alias, id } = useParams();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [typeExam, setTypeExam] = React.useState("sap-toi");
  const [typeExercie, setTypeExercie] = React.useState("sap-toi");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const loadBaiThiHoanThanh = () => {
    setAnchorEl(null);
    setTypeExam("hoan-thanh")
  };
  const loadBaiThiSapToi = () => {
    setAnchorEl(null);
    setTypeExam("sap-toi")
  }

  const loadBaiThiKhongHoanThanh = () => {
    setAnchorEl(null);
    setTypeExam("khong-hoan-thanh")
  }

  const loadBaiTapHoanThanh = () => {
    setAnchorEl(null);
    setTypeExercie("hoan-thanh")
  };
  const loadBaiTapSapToi = () => {
    setAnchorEl(null);
    setTypeExercie("sap-toi")
  }

  const loadBaiTapKhongHoanThanh = () => {
    setAnchorEl(null);
    setTypeExercie("khong-hoan-thanh")
  }

  useEffect(() => {
    dispatch(actSetIsDisplayTab(true));
    dispatch(actSetIsDisplayHeader(true));
    dispatch(actSetIDClass(id));
  });
  return (
    <Container className="class-detail">
      <ClassHeader />
      <Grid container className="class-detail-content" spacing={3}>
        <ClassNotice />
        <Grid item md={9} lg={9}>
          {alias === "bai-thi" && <ExamList typeExam={typeExam} />}
          {alias === "bai-tap" && <ExercisesList type={typeExercie} />}
          {alias === "danh-sach-sinh-vien" && <StudentList />}
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        className="fab-filter"
        aria-label="add"
        onClick={handleClick}
      >
        <SearchIcon />
      </Fab>

      {alias === "bai-tap" && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={loadBaiThiHoanThanh}
        >
          <MenuItem onClick={loadBaiTapSapToi}>Bài tập sắp tới</MenuItem>
          <MenuItem onClick={loadBaiTapHoanThanh}>Bài tập đã hoàn thành</MenuItem>
          <MenuItem onClick={loadBaiTapKhongHoanThanh}>Bài tập chưa hoàn thành</MenuItem>
        </Menu>
      )}
      {alias === "bai-thi" && (
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={loadBaiThiHoanThanh}
        >
          <MenuItem onClick={loadBaiThiSapToi}>Bài thi sắp tới</MenuItem>
          <MenuItem onClick={loadBaiThiHoanThanh}>Bài thi đã hoàn thành</MenuItem>
          <MenuItem onClick={loadBaiThiKhongHoanThanh}>Bài thi chưa hoàn thành</MenuItem>
        </Menu>
      )}
    </Container>
  );
};

export default ClassDetailPage;

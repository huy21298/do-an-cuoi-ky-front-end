import React from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ClassHeader from "../components/ClassRoom/ClassHeader";
import ClassNotice from "../components/ClassRoom/ClassNotice";
import StudentList from "../components/ClassRoom/StudentList";
import ExamList from "../components/ClassRoom/ExamList";
import ExercisesList from "../components/ClassRoom/ExercisesList";
import "../styles/class-detail-page.scss";
import "../styles/common.scss";


const ClassDetailPage = () => {
  // const { alias, id } = useParams();
  const alias = "bai-thi";
  // const alias = "bai-tap";
  // const alias = "danh-sach-sinh-vien";
  return (
    <Container className="class-detail">
      <ClassHeader />
      <Grid container className="class-detail-content" spacing={3}>
        <ClassNotice />
          <Grid item md={9} lg={9}>
            {alias === "bai-thi" && <ExamList />}
            {alias === "bai-tap" && <ExercisesList />}
            {alias === "danh-sach-sinh-vien" && <StudentList />}
          </Grid>
      </Grid>
    </Container>
  );
};

export default ClassDetailPage;

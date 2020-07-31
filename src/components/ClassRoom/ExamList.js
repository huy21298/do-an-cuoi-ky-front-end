import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import ExamItem from "./ExamItem";
import AxiosService from "../../services/axios.service";

const ClassRoomItemsList = () => {
  // const { id } = useParams();

  const theTest = {title: ""}
  const [tests, setTests] = useState([theTest]);

  useEffect(() => {
    AxiosService.get(`/v1/lop-hoc/${"111"}/bai-thi`)
      .then(({ data: response}) => setTests(response.data.dsBaiThi))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {mapDataTesting(tests)}
      </Grid>
    </section>
  );
};

const mapDataTesting = (tests) => {
  return tests.map((item, index) => <ExamItem key={index} baiThi={item} />)
}

export default ClassRoomItemsList;

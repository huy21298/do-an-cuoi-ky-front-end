import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import ExerciseItem from "./ExerciseItem";
import AxiosService from "../../services/axios.service";

const ClassRoomItemsList = () => {
  // const { id } = useParams();
  const exercise = {title: ""}
  const [exercises, setExercises] = useState([exercise]);

  useEffect(() => {
    // AxiosService.get(`/v1/lop-hoc/${"1"}/bai-thi`)
    //   .then(({ data: response}) => setExercises(response.data.dsBaiThi))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {mapDataTesting(exercises)}
      </Grid>
    </section>
  );
};

const mapDataTesting = (tests) => {
  return tests.map((item, index) => <ExerciseItem key={index} baiThi={item} />)
}

export default ClassRoomItemsList;

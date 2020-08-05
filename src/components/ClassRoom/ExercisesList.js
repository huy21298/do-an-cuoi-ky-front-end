import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import ExerciseItem from "./ExerciseItem";
import { actGetExercisesReq } from "../../actions/exercises.action";

const ClassRoomItemsList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.loading)
  const exercises = useSelector(state => state.exercises);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetExercisesReq(id));
  }, []);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {mapDataExercises(exercises, loading)}
      </Grid>
    </section>
  );
};

const mapDataExercises = (exercises, loading) => {
  return exercises.map((item, index) => <ExerciseItem key={index} exercise={item} loading={loading} />)
}

export default ClassRoomItemsList;

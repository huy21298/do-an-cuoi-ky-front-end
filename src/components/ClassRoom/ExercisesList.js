import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ExerciseItem from "./ExerciseItem";
import ExerciseItemFinish from "./ExerciseItemFinish";
import ExerciseItemNotFinish from "./ExerciseItemNotFinish";
import { actGetExercisesReq } from "../../actions/exercises.action";
import { actGetExercisesFinishReq } from "../../actions/exercises-finish.action";
import { actGetExercisesNotFinishReq } from "../../actions/exercises-not-finish.action";
import { actGetLoading } from "../../actions/loading.action";
import { actGetTokenFromLocal } from '../../actions/token.action';

const ClassRoomItemsList = ({ type }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const exercises = useSelector((state) => state.exercises);
  const exercisesFinish = useSelector((state) => state.exercisesFinish);
  const exercisesNotFinish = useSelector((state) => state.exercisesNotFinish);
  const { token } = useSelector((state) => state.token);
  const { id } = useParams();

  console.log('exercisesNotFinish', exercisesNotFinish);

  const actBaiTap = {
    "sap-toi": actGetExercisesReq,
    "hoan-thanh": actGetExercisesFinishReq,
    "khong-hoan-thanh": actGetExercisesNotFinishReq,
  };

  useEffect(() => {
    const actGet = actBaiTap[type];
    dispatch(actGetTokenFromLocal());
    dispatch(actGet(id, token));
    dispatch(actGetLoading());
  }, [type, token]);

  return (
    <section className="class-detail-notice-list">
      <Grid container spacing={4}>
        {type === "sap-toi" && mapDataExercises(exercises, loading, type)}
        {type === "hoan-thanh" &&
          mapDataExercises(exercisesFinish, loading, type)}
      </Grid>
    </section>
  );
};

const mapDataExercises = (exercises, loading, type) => {
  const typeList = {
    "sap-toi": ExerciseItem,
    "hoan-thanh": ExerciseItemFinish,
    "khong-hoan-thanh": ExerciseItemNotFinish,
  };
  const Item = typeList[type];
  return exercises.map((item, index) => (
    <Item key={index} exercise={item} loading={loading} />
  ));
};

export default ClassRoomItemsList;

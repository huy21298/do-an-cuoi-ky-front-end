import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
// import ClassItem from '../components/ClassesList/ClassItem';
import ClassItem from "../components/ClassesList/ClassItem";
import { useDispatch, useSelector } from "react-redux";
import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";
import { actGetClassesReq } from "../actions/classes.action";
import { actGetLoading } from "../actions/loading.action";
import { actGetMessage } from "../actions/error-message.action";
import { actSetIsDisplayHeader } from "../actions/display-header.action";

import { showToastError } from '../services/toast.service';


import "../styles/class-room.scss";

const ClassRoomPage = () => {
  const classes = useSelector((state) => state.classes);
  const loading = useSelector((state) => state.loading);
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();
  console.log('classes', classes);
  useEffect(() => {
    dispatch(actGetLoading());
    dispatch(actGetClassesReq());
    dispatch(actGetMessage());
    dispatch(actSetIsDisplayTab(false));
    dispatch(actSetIsDisplayHeader(true));
    document.title = "Danh sách lớp học"
  }, []);

  useEffect(() => {
    if (errorMessage.length > 0) {
      showToastError(errorMessage);
    }
  }, []);

  return (
    <Grid container className="class-room" component="section">
      <Grid item md={2} />
      <Grid item md={8}>
        <Grid container spacing={5} className="grid-custom">
          <Grid item xs={12}>
            <Grid container spacing={6}>
              {mapDataClasses(classes, loading)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

const mapDataClasses = (classes, loading) => {
  if (classes.length <= 0) return [];
  return classes.map((item, index) => (
    <ClassItem key={index} classItem={item} isLoading={loading} />
  ));
};

export default ClassRoomPage;

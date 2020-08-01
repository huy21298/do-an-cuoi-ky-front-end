import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
// import ClassItem from '../components/ClassesList/ClassItem';
import ClassItem from "../components/ClassesList/ClassItem";
import { useDispatch } from "react-redux";
import { actSetIsDisplayTab } from "../actions/display-tab-navigation.action";

import "../styles/class-room.scss";

const classItem = {
  id: "",
  title: "",
  teacherName: "",
  avatar: "",
};

const ClassRoomPage = () => {
  const dispatch = useDispatch();
  const [classes, setClasses] = useState([
    classItem,
    classItem,
    classItem,
    classItem,
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(actSetIsDisplayTab(false));
  })

  return (
    <Grid container className="class-room" component="section">
      <Grid item md={2} />
      <Grid item md={8}>
        <Grid container spacing={5} className="grid-custom">
          <Grid item xs={12}>
            <Grid container spacing={6}>
              {mapDataClasses(classes, isLoading)}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={2} />
    </Grid>
  );
};

const mapDataClasses = (classes, isLoading) => {
  if (classes.length <= 0) return [];
  return classes.map((item, index) => (
    <ClassItem key={index} classItem={item} isLoading={isLoading} />
  ));
};

export default ClassRoomPage;

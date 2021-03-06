import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { actGetStudentsReq } from '../../actions/students.action';
import { actGetTokenFromLocal } from '../../actions/token.action';
import { actGetLoading } from '../../actions/loading.action';

import StudentItem from './StudentItem';

const ClassRoomNotice = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students);
  const loading = useSelector(state => state.loading);
  const { token } = useSelector(state => state.token);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actGetTokenFromLocal());
    dispatch(actGetStudentsReq(id, token));
    dispatch(actGetLoading());

  }, [token]);

  return (
    <Grid
      container
      component="section"
      className="classroom-student-list"
      spacing={2}
    >
      {mapStudents(students, loading)} 
    </Grid>
  );
};

const mapStudents = (students, loading) => {
  return students.map((item, index) => <StudentItem key={index} student={item} loading={loading} />)
}

export default ClassRoomNotice;

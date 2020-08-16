import React, { useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import { default as Tab } from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { actGetIDClass } from '../../actions/class-id.action';

export default function TabsNavigation() {
  const [value, setValue] = React.useState(0);
  const classID = useSelector(state => state.classID);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetIDClass())
  }, [])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        variant="fullWidth"
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
      >
        <Tab label='Bài thi' component={Link} to={`/lop-hoc/${classID}/bai-thi`} />
        <Tab label='Bài tập' component={Link} to={`/lop-hoc/${classID}/bai-tap/`} />
        <Tab label='Bạn học cùng lớp' component={Link} to={`/lop-hoc/${classID}/danh-sach-sinh-vien`} />
      </Tabs>
    </>
  );
}
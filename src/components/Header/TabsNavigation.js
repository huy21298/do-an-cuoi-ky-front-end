import React from "react";
import Tabs from "@material-ui/core/Tabs";
import { default as Tab } from '@material-ui/core/Tab';
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from 'react-router-dom';

export function TabsNavigation() {
  const [value, setValue] = React.useState(0);

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
        <Tab label='Bài thi' component={Link} to={`/lop-hoc/1/bai-thi`} />
        <Tab label='Bài tập' component={Link} to={`/lop-hoc/1/bai-tap/`} />
        <Tab label='Bạn học cùng lớp' component={Link} to={`/lop-hoc/1/danh-sach-sinh-vien`} />
      </Tabs>
    </>
  );
}

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

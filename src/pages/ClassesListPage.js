import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
// import ClassItem from '../components/ClassesList/ClassItem';
import ClassItem from "../components/ClassesList/ClassItem";
import AxiosService from "../services/axios.service";

const classItem = {
  id: "",
  title: "",
  teacherName: "",
  avatar: "",
};

const ClassRoomPage = () => {
  const [classes, setClasses] = useState([classItem]);
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {

  //   (async function getClassRooms(): Promise<void> {
  //     const { data } = await AxiosService.get("/v1/lop-hoc/5efdfa26a971c8cc194b41bc");
  //     setClasses(data.data.lopHoc.ds_lop_hoc);
  //   })()

  // }, [])
  return (
    <div className="class-room">
      <Grid container spacing={5} className="grid-custom">
        <Grid item xs={12}>
          <Grid container spacing={6}>
            {mapDataClasses(classes, isLoading)}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const mapDataClasses = (classes, isLoading) => {
  if (classes.length <= 0) return [];
  return classes.map((item, index) => (
    <ClassItem key={index} lopHoc={item} isLoading={isLoading} />
  ));
};

export default ClassRoomPage;

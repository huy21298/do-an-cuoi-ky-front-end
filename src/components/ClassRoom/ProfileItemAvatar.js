import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  })
);


const ProfileItemAvatar = ({handleClickOpen }) => {
  const classes = useStyles();
  return (
    <Grid container className="profile-detail-item" component="section" onClick={handleClickOpen}>
      <Grid item xs={3} sm={3} md={4}>
        <h3>Ảnh</h3>
      </Grid>

      <Grid item xs={7} sm={7} md={6}>
        <Avatar
          src="https://www.w3schools.com/howto/img_avatar.png"
          className={classes.large}
        />
      </Grid>
      <Grid item xs={2} sm={2} md={2}></Grid>
    </Grid>
  );
};

export default ProfileItemAvatar;

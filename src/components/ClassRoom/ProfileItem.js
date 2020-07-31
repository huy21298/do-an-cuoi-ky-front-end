import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const ProfileItem = ({ label, element }) => {
  const [isEdit, setIsEdit] = useState(false);
  const onEditField = (e) => {
    setIsEdit(!isEdit)
  }
  return (
    <Grid container className="profile-detail-item" component="section">
      <Grid item xs={3} sm={3} md={4}>
        <h3>{label}</h3>
      </Grid>
      <Grid item xs={7} sm={7} md={6}>
        { !isEdit && <div className="profile-item-content">{element}</div>}
        { isEdit && <div className="profile-item-edit">
        <TextField
          id="outlined-textarea"
          label={label}
          variant="outlined"
          fullWidth={true}
          // type="datetime-local"
        />
        </div>}
      </Grid>
      <Grid item xs={2} sm={2} md={2} className="icon">
        <IconButton onClick={onEditField} >
          <EditIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ProfileItem;

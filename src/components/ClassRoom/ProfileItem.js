import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

const ProfileItem = ({ label, element, type }) => {
  const [isEdit, setIsEdit] = useState(false);
  const onEditField = (e) => {
    setIsEdit(true);
  };
  const onConfirmField = (e) => {
    setIsEdit(false);
  };
  return (
    <Grid container className="profile-detail-item" component="section">
      <Grid item xs={3} sm={3} md={4}>
        <h3>{label}</h3>
      </Grid>
      <Grid item xs={7} sm={7} md={4}>
        {!isEdit && <div className="profile-item-content">{element}</div>}
        {isEdit && (
          <div className="profile-item-edit">
            <TextField
              id="outlined-textarea"
              label={label}
              defaultValue="2017-05-24"
              form
              variant="outlined"
              fullWidth={true}
              type={type}
              // type="datetime-local"
            />
          </div>
        )}
      </Grid>
      <Grid item xs={2} sm={2} md={4} className="icon">
        {!isEdit && <IconButton onClick={onEditField}>
          <EditIcon className="edit-icon" />
        </IconButton>}
        {isEdit && (
          <IconButton onClick={onConfirmField}>
            <DoneOutlineIcon className="tick-icon" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfileItem;

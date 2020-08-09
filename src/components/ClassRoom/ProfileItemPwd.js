import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
// import DialogChangePwd from '../components/ClassRoom/DialogChangePwd';
import DialogChangePwd from './DialogChangePwd';

const ProfileItem = ({ password }) => {
  const [open, setOpen] = useState(false);
  const onEditPwd = (e) => {
    setOpen(true);
  };
  const closeDialog = (e) => {
    setOpen(false)
  }
  return (
    <Grid container className="profile-detail-item" component="section">
      <Grid item xs={3} sm={3} md={4}>
        <h3>Mật khẩu</h3>
      </Grid>
      <Grid item xs={7} sm={7} md={4}>
        <div className="profile-item-content">{password}</div>
      </Grid>
      <Grid item xs={2} sm={2} md={4} className="icon">
        <IconButton onClick={onEditPwd}>
          <EditIcon className="edit-icon" />
        </IconButton>
      </Grid>
      <DialogChangePwd open={open} closeDialog={closeDialog} />
    </Grid>
  );
};

export default ProfileItem;

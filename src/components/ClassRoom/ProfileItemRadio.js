import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import Radio from "@material-ui/core/Radio";

const ProfileItem = ({ element, element_format, changeInfo}) => {
  const [isEdit, setIsEdit] = useState(false);
  const onEditField = (e) => {
    setIsEdit(true);
  };
  const onConfirmField = (e) => {
    setIsEdit(false);
  };
  const onChangeSex = e => {
    const field = {gioi_tinh: Boolean(+e.target.value)}
    changeInfo(field);
  }
  return (
    <Grid container className="profile-detail-item" component="section">
      <Grid item xs={3} sm={3} md={4}>
        <h3>Giới tính</h3>
      </Grid>
      <Grid item xs={7} sm={7} md={4}>
        {!isEdit && <div className="profile-item-content">{element ? "Nam" : "Nữ"}</div>}
        {isEdit && (
          <div className="profile-item-edit">
            <Radio checked={element} onChange={onChangeSex} value="1" className="item-radio-group" /> Nam
            <Radio checked={!element} onChange={onChangeSex} value="0" /> Nữ
          </div>
        )}
      </Grid>
      <Grid item xs={2} sm={2} md={4} className="icon">
        {!isEdit && (
          <IconButton onClick={onEditField}>
            <EditIcon className="edit-icon" />
          </IconButton>
        )}
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

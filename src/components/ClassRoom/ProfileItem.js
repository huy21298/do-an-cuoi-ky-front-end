import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";
import { useForm } from 'react-hook-form';

const ProfileItem = ({ label, element, alias , type, changeInfo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [info, setInfo] = useState(element);
  const { register, handleSubmit, errors } = useForm();
  const onEditField = (e) => {
    setIsEdit(true);
  };
  const onConfirmField = value => {
    setIsEdit(false);
    changeInfo(value)
  };

  const validation = (type, label) => {
    if (type === 'email') {
      return register({
        required: `${label} không được để trống`,
        pattern: {
          value: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/,
          message: "Email không đúng định dạng",
        }
      })
    }
    if (type === "phone") {
      return register({
        required: `${label} không được để trống`,
        pattern: {
          value: /(09|01[2|6|8|9])+([0-9]{8})\b/,
          message: "Số điện thoại không đúng định dạng",
        }
      })
    } else {
      return register({
        required: `${label} không được để trống`
      })
    }
  }

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
              error={errors[alias]?.message.length > 0}
              id="outlined-textarea"
              label={label}
              defaultValue={element}
              name={alias}
              form
              variant="outlined"
              fullWidth={true}
              type={type}
              inputRef={validation(type, label)}
              helperText={errors[alias]?.message}
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
          <IconButton onClick={handleSubmit(onConfirmField)}>
            <DoneOutlineIcon className="tick-icon" />
          </IconButton>
        )}
      </Grid>
    </Grid>
  );
};

export default ProfileItem;

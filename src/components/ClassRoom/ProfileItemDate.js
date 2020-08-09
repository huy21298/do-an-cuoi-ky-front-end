import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

export default function ProfileItemDate() {
  const [isEdit, setIsEdit] = useState(false);
  const onEditField = (e) => {
    setIsEdit(true);
  };
  const onConfirmField = (e) => {
    setIsEdit(false);
  };
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <Grid container className="profile-detail-item" component="section">
      <Grid item xs={3} sm={3} md={4}>
        <h3>sadda</h3>
      </Grid>
      <Grid item xs={7} sm={7} md={4}>
        {!isEdit && <div className="profile-item-content">asdad</div>}
        {isEdit && (
          <div className="profile-item-edit">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
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
}

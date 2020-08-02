import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";

const PopUpAddClass = ({ open, onClosePopup }) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
  const { register, handleSubmit, errors } = useForm();
  return (
    <div>
      <Dialog
        open={open}
        onClose={onClosePopup}
        aria-labelledby="form-dialog-title"
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="form-dialog-title">Tham gia lớp học</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nhập mã tham gia lớp học
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Mã lớp học"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClosePopup} color="primary">
            Tham gia
          </Button>
          <Button onClick={onClosePopup} color="primary">
            Hủy bỏ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopUpAddClass;

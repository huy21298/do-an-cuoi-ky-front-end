import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";

import AxiosService from '../../services/axios.service';
import { getTokenFromLocal } from '../../reducers/token.reducer';

const PopUpAddClass = ({ open, onClosePopup }) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [message, setMessage] = useState("Tham gia");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit, errors, setError } = useForm();

  const token = getTokenFromLocal();

  const handleSubmitSendCode = (values) => {
    setIsLoading(true);
    setMessage("Đang tải dữ liệu...");
    AxiosService.postAuth("/v1/lop-hoc/tham-gia", values, token.token)
      .then((response) => {
        setIsLoading(false);
        setMessage("Tham gia");
        console.log('response', response);
      })
      .catch((error) => {
        setIsLoading(false);
        setMessage("Tham gia");
        if (error.status === 403) {
          setError('code', { message: error.data.msg})
        }
      })
  };
  return (
    <div>
      <form action="" method="POST">
        <Dialog
          open={true}
          onClose={onClosePopup}
          aria-labelledby="form-dialog-title"
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >
          <DialogTitle id="form-dialog-title">Tham gia lớp học</DialogTitle>
          <DialogContent>
            <DialogContentText>Nhập mã tham gia lớp học</DialogContentText>
            <TextField
              autoFocus
              error={errors.code?.message.length > 0}
              margin="dense"
              label="Mã lớp học"
              type="text"
              name="code"
              fullWidth
              inputRef={register({
                required: "Mã tham gia không để trống",
              })}
              helperText={errors.code?.message}
            />
          </DialogContent>
          <DialogActions>
            
              <Button
                disabled={isLoading}
                onClick={handleSubmit(handleSubmitSendCode)}
                type="submit"
                color="primary"
              >
                {message}
              </Button>
            <Button onClick={onClosePopup} color="primary">
              Hủy bỏ
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </div>
  );
};

export default PopUpAddClass;

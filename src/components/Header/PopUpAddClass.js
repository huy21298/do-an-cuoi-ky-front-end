import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';

import AxiosService from '../../services/axios.service';
import {showToastSuccess, showToastError} from '../../services/toast.service';
import { getTokenFromLocal } from '../../reducers/token.reducer';
import { actGetMessage } from '../../actions/error-message.action';
import { actAddClass } from '../../actions/classes.action';

const PopUpAddClass = ({ open, onClosePopup }) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const [messageBtn, setMessageBtn] = useState("Tham gia");
  const [isLoading, setIsLoading] = useState(false);
  const errorMessage = useSelector(state => state.errorMessage);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, setError } = useForm();

  const token = getTokenFromLocal();

  useEffect(() => {
    dispatch(actGetMessage);
  }, [])

  useEffect(() => {
    if (errorMessage.length > 0) {
      showToastError("Có lỗi xảy ra, vui lòng thử lại sau")
    }
  }, [])

  const handleSubmitSendCode = (values) => {
    setIsLoading(true);
    setMessageBtn("Đang xác nhận mã...");
    AxiosService.postAuth("/v1/lop-hoc/tham-gia", values, token.token)
      .then((response) => {
        const { lop_hoc } = response.data;
        dispatch(actAddClass(lop_hoc));
        setIsLoading(false);
        setMessageBtn("Tham gia");
        const { success, msg } = response.data;
        if (success) {
          showToastSuccess({msg});
          onClosePopup();
        }
      })
      .catch((error) => {
        setIsLoading(false);
        setMessageBtn("Tham gia");
        if (error.status === 403) {
          console.log('error', error);
          setError('code', { message: error.data.msg})
        }
      })
  };
  return (
    <div>
      <form action="" method="POST">
        <Dialog
          open={open}
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
                {messageBtn}
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

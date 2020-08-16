import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import { useForm } from "react-hook-form";
import AxiosService from "../../services/axios.service";
import { showToastSuccess, showToastError } from "../../services/toast.service";
import { getTokenFromLocal } from "../../reducers/token.reducer";

export default function DialogConfirm({ open, handleCloseConfirm, info }) {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const { token } = getTokenFromLocal();
  const confirmChange = async (value) => {
    setLoading(true);
    const thong_tin = JSON.stringify({ ...value, thong_tin_sua: { ...info }, loai: "SinhVien" });
    try {
      const { data } = await AxiosService.postAuth(
        "/v1/sinh-vien/sua-thong-tin",
        { thong_tin },
        token
      );
      setLoading(false);
      const { success, msg } = data;
      if (success) {
        showToastSuccess(msg);
        handleCloseConfirm();
      } else {
        showToastError(msg, 4000);
      }
    } catch (e) {
      setLoading(false);

      console.log("e", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseConfirm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Xác nhận thay đổi thông tin
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            Lưu ý rằng thông tin sẽ phải chờ Quản trị viên xác nhận. Trong thời
            gian đó, hệ thống sẽ lấy thông tin cũ.
          </Typography>
          <TextField
            error={errors.ly_do?.message.length > 0}
            id="outlined-textarea"
            label="Lý do thay đổi thông tin"
            form
            multiline
            rows={4}
            variant="outlined"
            fullWidth={true}
            type="text"
            name="ly_do"
            inputRef={register({
              required: "Lý do không được để trống",
            })}
            helperText={errors.ly_do?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirm} color="primary">
            Hủy bỏ
          </Button>
          <Button
            disabled={loading}
            onClick={handleSubmit(confirmChange)}
            color="primary"
          >
            {loading ? "Đang thay đổi thông tin ..." : "Xác nhận thay đổi"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

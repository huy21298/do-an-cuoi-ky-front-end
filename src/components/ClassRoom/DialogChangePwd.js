import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import AxiosService from "../../services/axios.service";
import { showToastSuccess } from "../../services/toast.service";
import { getTokenFromLocal } from "../../reducers/token.reducer";

export default function DialogChangePwd({ open, closeDialog }) {
  const { register, handleSubmit, errors, setError, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const { token } = getTokenFromLocal();
  const changePwd = async (value) => {
    setLoading(true);
    try {
      const { data } = await AxiosService.postAuth(
        "/v1/sinh-vien/doi-mat-khau",
        value,
        token
      );
      if (data.success) {
        closeDialog();
        showToastSuccess("Thay đổi mật khẩu thành công");
      }
    } catch (e) {
      const { data } = e;
      if (data.errors[0].param === "mat_khau_cu") {
        setError("mat_khau_cu", {
          message: data.errors[0].msg,
        });
      }
      if (data.errors[0].param === "mat_khau_moi") {
        setError("mat_khau_moi", {
          message: data.errors[0].msg,
        });
      }
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Thay đổi mật khẩu</DialogTitle>
        <DialogContent>
          <TextField
            error={errors.mat_khau_cu?.message.length > 0}
            id="outlined-textarea"
            label="Mật khẩu cũ"
            form
            variant="outlined"
            fullWidth={true}
            type="password"
            className="input-password"
            name="mat_khau_cu"
            helperText={errors.mat_khau_cu?.message}
            inputRef={register({
              required: "Mật khẩu không để trống",
              minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
              maxLength: { value: 24, message: "Mật khẩu tối đa 24 ký tự" },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z]).{6,24}$/,
                message:
                  "Mật khẩu tối thiểu 6 ký tự, tối đa 24 ký tự và có ít nhất một chữ viết hoa và số",
              },
            })}
          />
          <TextField
            error={errors.mat_khau_moi?.message.length > 0}
            id="outlined-textarea"
            label="Mật khẩu mới"
            form
            variant="outlined"
            fullWidth={true}
            type="password"
            className="input-password"
            name="mat_khau_moi"
            helperText={errors.mat_khau_moi?.message}
            inputRef={register({
              required: "Mật khẩu mới không để trống",
              minLength: { value: 6, message: "Mật khẩu tối thiểu 6 ký tự" },
              maxLength: { value: 24, message: "Mật khẩu tối đa 24 ký tự" },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z]).{6,24}$/,
                message:
                  "Mật khẩu tối thiểu 6 ký tự, tối đa 24 ký tự và có ít nhất một chữ viết hoa và số",
              },
            })}
          />
          <TextField
            error={errors.xac_nhan_mk?.message.length > 0}
            id="outlined-textarea"
            label="Xác nhận mật khẩu mới"
            form
            variant="outlined"
            fullWidth={true}
            type="password"
            name="xac_nhan_mk"
            helperText={errors.xac_nhan_mk?.message}
            inputRef={register({
              required: "Không được để trống",
              validate: (value) =>
                value === watch("mat_khau_moi") ||
                "Mật khẩu mới phải giống nhau",
            })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Hủy bỏ
          </Button>
          <Button disabled={loading} onClick={handleSubmit(changePwd)} color="primary">
            {loading ? "Đang thay đổi mật khẩu ..." : "Xác nhận"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

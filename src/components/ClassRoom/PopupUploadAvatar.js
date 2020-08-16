import React, { useState, useEffect } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import ReactFileReader from "react-file-reader";
import { showToastSuccess, showToastError } from "../../services/toast.service";
import { useDispatch, useSelector } from "react-redux";
import { actChangeAvatar } from "../../actions/info.action";
import { actGetTokenFromLocal } from "../../actions/token.action";
import { actGetLoadingData } from "../../actions/loading-data.action";
import { actGetError403 } from "../../actions/errors/403.action";
import { dispatchError } from "../../actions/dispatch-error";
import AxiosService from "../../services/axios.service";

import enviroment from "../../environments/enviroment";

const styles = (theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const PopupUploadAvatar = ({ open, handleClose, value }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.token);
  const [avatarTemp, setAvatarTemp] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(actGetTokenFromLocal());
    dispatch(actGetLoadingData());
    dispatch(actGetError403());
  }, []);

  const handleFiles = (files) => {
    setAvatarTemp(files.fileList[0]);
    document.getElementById("avatar").setAttribute("src", files.base64);
  };

  const uploadFile = async (e) => {
    if (avatarTemp != null) {
      setLoading(true);
      const formData = new FormData();
      formData.append("avatar", avatarTemp);
      try {
        const { data } = await AxiosService.postAuth(
          "/v1/sinh-vien/cap-nhat-avatar",
          formData,
          token
        );
        if (data.success) {
          const { anh_dai_dien } = data;
          dispatch(actChangeAvatar(anh_dai_dien));
          handleClose();
          showToastSuccess(data.msg);
          setLoading(false);
        } else {
          showToastSuccess(data.msg);
          setLoading(false);
        }
      } catch (error) {
        if (error?.status) {
          dispatchError(error.status, error.data, dispatch);
        }
      } finally {
        setLoading(false);
      }
    } else {
      showToastError("Không có ảnh nào được tải lên");
    }
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="customized-dialog-title">
          Upload hình đại diện
        </DialogTitle>
        <DialogContent dividers>
          <div className="avatar-upload">
            <img
              id="avatar"
              src={`${enviroment.url.back_end}/avatar/${value}`}
              alt=""
            />
            <ReactFileReader
              id="file-avatar-upload"
              base64={true}
              handleFiles={handleFiles}
            >
              <div className="icon-photo">
                <PhotoCameraIcon className="icon" />
              </div>
            </ReactFileReader>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hủy bỏ
          </Button>
          <Button color="primary" disabled={loading} onClick={uploadFile}>
            Lưu thay đổi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupUploadAvatar;

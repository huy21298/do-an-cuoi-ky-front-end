import React, { FC, useRef } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog, { DialogProps } from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";

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

const PopupUploadAvatar = ({ open, handleClose }) => {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const refInputFile = useRef(null);
  const uploadImage = () => {
    if (null !== refInputFile) {
      (refInputFile).current.click();
      console.log((refInputFile).current.file)
    }
  };
  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={true}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
      >
        <DialogTitle id="customized-dialog-title">
          Upload hình đại diện
        </DialogTitle>
        <DialogContent dividers>
          <div className="avatar-upload">
            <img
              src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png"
              alt=""
            />
            <div className="icon-photo" onClick={uploadImage}>
              <PhotoCameraIcon className="icon" />
            </div>
            <input type="file" ref={refInputFile} style={{ display: "none" }} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Lưu thay đổi
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PopupUploadAvatar;

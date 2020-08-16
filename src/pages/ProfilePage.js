import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import ProfileItem from "../components/ClassRoom/ProfileItem";
import ProfileItemAvatar from "../components/ClassRoom/ProfileItemAvatar";
import ProfileItemDate from "../components/ClassRoom/ProfileItemDate";
import ProfileItemRadio from "../components/ClassRoom/ProfileItemRadio";
import ProfileItemPwd from "../components/ClassRoom/ProfileItemPwd";
import PopupUploadAvatar from "../components/ClassRoom/PopupUploadAvatar";
import DialogConfirm from '../components/ClassRoom/DialogConfirm';
import { useSelector, useDispatch } from 'react-redux';

import { actGetInfo } from '../actions/info.action';
import { actGetInfoSend, actUpdateInfoSend } from '../actions/info-send.action';
import { actSetIsDisplayHeader } from "../actions/display-header.action";

import "../styles/profile-page.scss";

const ProfileStudentPage = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const dispatch = useDispatch();
  const info = useSelector(state => state.info);
  const infoSend = useSelector(state => state.infoSend);

  const changeInfo = field => {
    dispatch(actUpdateInfoSend(field));
  }

  useEffect(() => {
    dispatch(actGetInfo());
    dispatch(actGetInfoSend());
    dispatch(actSetIsDisplayHeader(true));
  }, []);

  const handleClickOpen = () => {
    setOpenPopup(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleOpenConfirm = () => {
    setOpenConfirm(true);
  }

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  }
  return (
    <Container component="section">
      <Grid
        item
        md={12}
        lg={12}
        component="section"
        className="profile-page"
      >
        <article className="profile-title">Thông tin cá nhân</article>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <section className="profile-detail">
              <h2 className="profile-detail-title">Hồ sơ</h2>
              <section className="profile-detail-content">
                <ProfileItemAvatar handleClickOpen={handleClickOpen} value={info.anh_dai_dien} />
                <ProfileItem alias="ho" changeInfo={changeInfo} type="text" label="Họ" element={infoSend.ho} />
                <ProfileItem alias="ten" changeInfo={changeInfo} type="text" label="Tên" element={infoSend.ten} />
                <ProfileItemDate element={infoSend.ngay_sinh} changeInfo={changeInfo} element_format={infoSend.ngay_sinh_format} />
                <ProfileItemRadio element={infoSend.gioi_tinh} changeInfo={changeInfo} element_format={infoSend.gioi_tinh_format} />
                <ProfileItemPwd password="******" />
              </section>
            </section>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <section className="profile-detail contact">
              <h2 className="profile-detail-title">Thông tin liên hệ</h2>
              <section className="profile-detail-content">
                <ProfileItem alias="email" changeInfo={changeInfo} label="Email" type="email" element={infoSend.email} />
                <ProfileItem alias="sdt" changeInfo={changeInfo} label="Liên hệ" type="phone" element={infoSend.sdt} />
              </section>
            </section>
            <article className="profile-detail-save">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SaveIcon />}
                onClick={handleOpenConfirm}
              >
                Lưu thay đổi
              </Button>
            </article>
          </Grid>
        </Grid>
      </Grid>
      <PopupUploadAvatar value={info.anh_dai_dien} handleClose={handleClose} open={openPopup} />
      <DialogConfirm open={openConfirm} handleCloseConfirm={handleCloseConfirm} info={infoSend} />
    </Container>
  );
};

export default ProfileStudentPage;

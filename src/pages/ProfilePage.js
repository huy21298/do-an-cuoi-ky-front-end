import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import SaveIcon from "@material-ui/icons/Save";
import Button from "@material-ui/core/Button";
import ProfileItem from "../components/ClassRoom/ProfileItem";
import ProfileItemAvatar from "../components/ClassRoom/ProfileItemAvatar";
import PopupUploadAvatar from "../components/ClassRoom/PopupUploadAvatar";

import "../styles/profile-page.scss";

const ProfileStudentPage = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = ()=> {
    setOpenPopup(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <Container component="section">
      {/* <Grid item md={3} xs={2} sm={2} /> */}
      <Grid
        item
        // xs={8}
        // sm={8}
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
                <ProfileItemAvatar handleClickOpen={handleClickOpen} />
                <ProfileItem label="Tên" element="Nguyễn Huy" />
                <ProfileItem label="Ngày sinh" element="21/02/1998" />
                <ProfileItem label="Giới tính" element="Nam" />
                <ProfileItem label="Mật khẩu" element="****" />
              </section>
            </section>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <section className="profile-detail contact">
              <h2 className="profile-detail-title">Thông tin liên hệ</h2>
              <section className="profile-detail-content">
                <ProfileItem label="Email" element="huy@test.com" />
                <ProfileItem label="Liên hệ" element="0397821183" />
              </section>
            </section>
            <article className="profile-detail-save">
              <Button
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<SaveIcon />}
              >
                Lưu thay đổi
              </Button>
            </article>
          </Grid>
        </Grid>
      </Grid>
      <PopupUploadAvatar handleClose={handleClose} open={openPopup} />
    </Container>
  );
};

export default ProfileStudentPage;

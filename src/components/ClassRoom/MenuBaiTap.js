import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuBaiTap = (anchorEl, handleClose) => {
  return (
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Bài tập sắp tới</MenuItem>
        <MenuItem onClick={handleClose}>Bài tập đã hoàn thành</MenuItem>
        <MenuItem onClick={handleClose}>Bài tập chưa hoàn thành</MenuItem>
      </Menu>
  )
}

export default MenuBaiTap;
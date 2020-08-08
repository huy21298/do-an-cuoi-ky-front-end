import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuBaiThi = (anchorEl, handleClose) => {
  return (
    <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Bài thi sắp tới</MenuItem>
        <MenuItem onClick={handleClose}>Bài thi đã hoàn thành</MenuItem>
        <MenuItem onClick={handleClose}>Bài thi chưa hoàn thành</MenuItem>
      </Menu>
  )
}

export default MenuBaiThi;
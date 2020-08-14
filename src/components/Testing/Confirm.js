import React from 'react';
import Button from '@material-ui/core/Button';

import "./confirm.scss";

const Confirmabc = ({ directToTesting, cancel }) => {
  return (
    <div className="confirm">
      <Button color="primary" variant="contained" onClick={directToTesting}>Xác nhận di chuyển đến bài thi</Button>
      <Button color="secondary" variant="contained" onClick={cancel} className="cancel">Hủy bỏ</Button>
    </div>
  )
}

export default Confirmabc;
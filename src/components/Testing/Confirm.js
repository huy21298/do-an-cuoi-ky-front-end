import React from 'react'

const Confirmabc = ({ directToTesting, cancel }) => {
  return (
    <div>
      <button onClick={directToTesting}>Xác nhận di chuyển đến bài thi</button>
      <button onClick={cancel}>Hủy bỏ</button>
    </div>
  )
}

export default Confirmabc;
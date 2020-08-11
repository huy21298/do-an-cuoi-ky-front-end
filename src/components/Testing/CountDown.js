import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import '../../styles/count-down-page.scss';

const CountdownPage = () => {
  const [time, setTime] = useState(189009);
  const [dayTime, setDateTime] = useState({
    'day': 0,
    'hours': 0,
    'minute': 0,
    'second': 0
  })
  return (
    <Grid component="section" container className="count-down-page">
      <Grid item md={3} />
      <Grid item md={6}>
        <section className="count-down">
          <article className="title">Bài thi sẽ bắt đầu trong</article>
          <div className="time-remain">
            <section className="count day">
              <span className="number">1</span>
              <span className="number">2</span>
              <div className="title">Ngày</div>
            </section>
            <span className="colon">:</span>
            <section className="count hours">
              <span className="number">1</span>
              <span className="number">2</span>
              <div className="title">Giờ</div>
            </section>
            <span className="colon">:</span>
            <section className="count minute">
              <span className="number">1</span>
              <span className="number">2</span>
              <div className="title">Phút</div>
            </section>
            <span className="colon">:</span>
            <section className="count second">
              <span className="number">1</span>
              <span className="number">2</span>
              <div className="title">Giây</div>
            </section>
          </div>
          <article className="direct-index">
            <Button component="a" href="/" startIcon={<KeyboardBackspaceIcon />}>Trở về trang chủ</Button>
          </article>
        </section>
      </Grid>
      <Grid item md={3} />
    </Grid>
  )
}

export default CountdownPage;
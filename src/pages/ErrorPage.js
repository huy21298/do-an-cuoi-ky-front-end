import React from "react";

import "../styles/error-page.scss";

const ErrorPage = (props) => {
  return (
    <>
      <div id="particles-js"></div>
      <div class="terminal-window">
        <header>
          <div class="button green"></div>
          <div class="button yellow"></div>
          <div class="button red"></div>
        </header>
        <section class="terminal">
          <div className="title">404</div>
          <div className="sub-title">Not found</div>
          <button>Quay trở về trang chủ</button>
        </section>
      </div>
      <div class="terminal-data mimik-run-output"></div>
    </>
  );
};

export default ErrorPage;

import React from "react";

const LargePrism = () => {
  return (
    <div className="prism-container">
      <div className="large-face large-front-face">
        <div className="large-scoreboard">
          <p>ARG - 4</p>
          <p>FRA - 3</p>
        </div>
      </div>
      <div className="large-face large-left-face">
        <div className="large-winnerboard ">
          <p>Winner</p>
          <p>ARG 🎉</p>
        </div>
      </div>
      <div className="large-face large-right-face">
        <img src="/assets/logo.png" className="large-logo" alt="logo" />
      </div>
    </div>
  );
};

export default LargePrism;

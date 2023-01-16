import React from "react";

const SmallPrism = () => {
  return (
    <div className="prism-container">
      <div className="face front-face">
        <div className="scoreboard">
          <p>ARG - 4</p>
          <p>FRA - 3</p>
        </div>
      </div>
      <div className="face left-face">
      <div className="winnerboard">
          <p>Winner</p>
          <p>ARG 🎉</p>
        </div>
      </div>
      <div className="face right-face">
        <img src="/assets/logo.png" className="logo" alt="logo" />
      </div>
    </div>
  );
};

export default SmallPrism;

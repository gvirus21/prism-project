import React from "react";

interface IProps {
  isMin: boolean;
}

const SmallPrism: React.FC<IProps> = ({ isMin }) => {
  return (
    <div className="prism-container">
      <div
        style={{
          height: `${isMin ? "5rem" : "10rem"}`,
          width: `${isMin ? "4rem" : "8rem"}`,
          transform: `${
            isMin
              ? "translateX(-2rem) rotateY(60deg)"
              : "translateX(-4rem) rotateY(60deg)"
          }`,
        }}
        className="face front-face"
      >
        <div
          style={{
            fontSize: `${isMin ? "0.7rem" : "1.2rem"}`,
          }}
          className="scoreboard"
        >
          <p>ARG - 4</p>
          <p>FRA - 3</p>
        </div>
      </div>
      <div
        style={{
          height: `${isMin ? "5rem" : "10rem"}`,
          width: `${isMin ? "4rem" : "8rem"}`,
          transform: `${
            isMin
              ? "rotateY(120deg)"
              : "rotateY(120deg)"
          }`,
        }}
        className="face left-face"
      >
        <div
          style={{
            fontSize: `${isMin ? "0.7rem" : "1.2rem"}`,
          }}
          className="winnerboard"
        >
          <p>Winner</p>
          <p>ARG 🎉</p>
        </div>
      </div>
      <div
        style={{
          height: `${isMin ? "5rem" : "10rem"}`,
          width: `${isMin ? "4rem" : "8rem"}`,
          transform: `${
            isMin
              ? "translateX(-1rem) translateZ(1.7rem)"
              : "translateX(-2rem) translateZ(3.5rem)"
          }`,
        }}
        className="face right-face"
      >
        <img
          src="/assets/logo.png"
          style={{ height: `${isMin ? "5rem" : "8rem"}` }}
          className="logo"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default SmallPrism;

import React, { useState, useRef } from "react";
import styles from "@/styles/prism.module.css";
import Prism from "./Prism";
import useDrag from "@/hooks/useDrag";

const PrismContainer = () => {
  const [isPrismHidden, setIsPrismHidden] = useState(false);
  const [isMin, setIsMin] = useState(false);

  const containerRef = useRef(null);

  const handleHidePrism = () => {
    setIsPrismHidden((prev) => !prev);
  };

  const handleSize = () => {
    setIsMin((prev) => !prev);
  };

  useDrag("prism");

  return (
    <div
      id="prism"
      ref={containerRef}
      hidden
      style={{height: `${isMin ? '5rem' : '15rem'}`}}
      className={styles.container}
    >
      <div className={styles.buttonContainer}>
        <button className={styles.sizeButton} onClick={handleSize}>
          Toggle Size
        </button>

        <button className={styles.hideButton} onClick={handleHidePrism}>
          {isPrismHidden ? "Show" : "Hide"}
        </button>
      </div>
      {!isPrismHidden ? (
        <div className={styles.visibleBox}>
          <Prism isMin={isMin} />
        </div>
      ) : (
        <div className={styles.emptyBox} />
      )}
    </div>
  );
};

export default PrismContainer;

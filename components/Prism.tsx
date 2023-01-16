import React, { useState, useRef } from "react";
import styles from "@/styles/prism.module.css";
import SmallPrism from "./SmallPrism";
import LargePrism from "./LargePrism";
import {motion} from 'framer-motion'

const Prism = () => {
  const [isPrismHidden, setIsPrismHidden] = useState(false);
  const [isMin, setIsMin] = useState(false);

  const containerRef = useRef(null);

  const handleHidePrism = () => {
    setIsPrismHidden((prev) => !prev);
  };

  const handleSize = () => {
    setIsMin((prev) => !prev);
  };


  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragMomentum={false}
      ref={containerRef}
      hidden
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
          {isMin ? <SmallPrism /> : <LargePrism />}
        </div>
      ) : (
        <div className={styles.emptyBox} />
      )}
    </motion.div>
  );
};

export default Prism;

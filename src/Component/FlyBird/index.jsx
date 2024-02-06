"use client";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import styles from "./FlyBird.module.scss";
const FlyBird = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x2f2fe3,
          // backgroundColor: 0x0,
        })
      );
    }
  }, [vantaEffect]);
  return (
    <>
      <div ref={vantaRef} className={styles.bird}></div>;
    </>
  );
};

export default FlyBird;

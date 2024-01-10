"use client";
import React, { useEffect, useRef, useState } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import styles from "./FlyBird.module.css";
export default function FlyBird() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xebeef2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} className={styles.bird}>
      Foreground content goes here
    </div>
  );
}

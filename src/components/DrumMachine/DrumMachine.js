"use client";
import React from "react";
import useSound from "use-sound";
import useKeypress from "react-use-keypress";

import styles from "./DrumMachine.module.css";

const SOUND_SRC = "/909-drums.mp3";

function DrumMachine() {
  const { soundEnabled } = useSound();
  const [play] = useSound(SOUND_SRC, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
    soundEnabled,
  });

  const handleKeyDown = (e) => {
    e.preventDefault();
    if (e.code === "ArrowLeft") {
      play({ id: "kick" });
    }
    if (e.code === "ArrowRight") {
      play({ id: "hihat" });
    }
    if (e.code === "ArrowUp") {
      play({ id: "snare" });
    }
    if (e.code === "ArrowDown") {
      play({ id: "cowbell" });
    }
  };

  useKeypress(
    ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"],
    handleKeyDown
  );

  return (
    <div className={styles.wrapper}>
      <button onClick={() => play({ id: "kick" })}>Kick</button>
      <button onClick={() => play({ id: "hihat" })}>Hat</button>
      <button onClick={() => play({ id: "snare" })}>Snare</button>
      <button onClick={() => play({ id: "cowbell" })}>Cowbell</button>
    </div>
  );
}

export default DrumMachine;

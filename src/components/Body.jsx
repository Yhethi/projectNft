import React, { useState } from "react";
import trienglesWall from "../assets/body/trienglesWall.png";
import "../assets/css/Body.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import bakcgroundSound from "../assets/mp3/hero/backgroundSound.mp3";
import playButton from "../assets/body/playButton.png";

const audio = new Audio(bakcgroundSound);

export const Body = () => {
  const [stopMusic, setStopMusic] = useState(false);

  function PlaySound() {
    if (!stopMusic) {
      audio.play();
      setStopMusic(!stopMusic);
    } else if (stopMusic) {
      audio.pause();
      setStopMusic(!stopMusic);
    }
  }
  return (
    <div className="body__global">
      <img
        className="playButton"
        src={playButton}
        alt={playButton}
        onClick={PlaySound}
      />
      <div className="body__wallpaper"></div>
      <div className="body__trianglesWall">
        <img src={trienglesWall} alt={trienglesWall} />
      </div>
      <div className="body__components">
        <Hero />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "../assets/css/Body.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import playButton from "../assets/body/playButton.png";

export const Homepage = ({ PlaySound }) => {
  return (
    <div className="body__global">
      <img
        className="playButton"
        src={playButton}
        alt={playButton}
        onClick={PlaySound}
      />
      <div className="body__wallpaper"></div>
      <div className="body__components">
        <Hero />
      </div>
    </div>
  );
};

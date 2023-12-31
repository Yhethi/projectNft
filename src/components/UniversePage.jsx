import React, { useState } from "react";
import "../assets/css/Universe.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import playButton from "../assets/body/playButton.png";

export const UniversePage = ({ PlaySound }) => {
  return (
    <div className="universe__global">
      <img
        className="playButton"
        src={playButton}
        alt={playButton}
        onClick={PlaySound}
      />
      <div className="universe__wallpaper"></div>
      <div className="universe__components">
        <Hero />
      </div>
    </div>
  );
};

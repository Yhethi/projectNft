import React from "react";
import trienglesWall from "../assets/body/trienglesWall.png";
import "../assets/css/Body.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";

export const Body = () => {
  return (
    <div className="body__global">
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

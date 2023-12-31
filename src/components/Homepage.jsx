import React, { useState } from "react";
import "../assets/css/Body.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import playButton from "../assets/body/playButton.png";
import "../assets/scss/lettersAnimation.scss";

export const Homepage = ({ PlaySound }) => {
  let index = 0;
  let data = ["Human Unleash"];

  let span = document.querySelector("span");
  let section = document.querySelector("section");

  function init() {
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
  }
  setTimeout(() => {
    init();
  }, 100);

  setInterval(function () {
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
    index = index < data.length ? index++ : 0;
  }, 4501);

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
        <div className="lettersAnimation">
          <section className="sectionHuman" data-identity="HUMAN UNLEASH">
            <blockquote className="d-flex">
              <p style={{ marginRight: "7px"}}>HUMAN</p>
              <span>UNLEASH</span>
            </blockquote>
          </section>
          <div class="pen__lines-wrapper">
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
            <div class="pen__line"></div>
          </div>
        </div>
        {/* <Hero /> */}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "../assets/css/Body.css";
import { Hero } from "./Hero";
import { Notices } from "./Notices";
import playButton from "../assets/body/playButton.png";
import "../assets/scss/lettersAnimation.scss";

export const Homepage = ({ PlaySound }) => {
  function init() {
    let txt = document.createTextNode(data[index]);
    section.dataset.identity = data[index];
    span.innerText = txt.textContent;
    index++;
  }
  setTimeout(() => {
    let index = 0;
    let data = ["Unete al Universo"];
    let span = document.querySelector("span");
    let section = document.querySelector("section");
    init();
    setInterval(function () {
      let txt = document.createTextNode(data[index]);
      section.dataset.identity = data[index];
      span.innerText = txt.textContent;
      index++;
      index = index < data.length ? index++ : 0;
    }, 4501);
  }, 500);

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
          <section className="sectionHuman" data-identity="UNETE AL UNIVERSO">
            <blockquote className="d-flex">
              <p className="d-flex">
                HUMAN
                <p style={{ color: "#FFF", marginLeft: "7px" }}>UNLEASH</p>
              </p>
              <span></span>
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

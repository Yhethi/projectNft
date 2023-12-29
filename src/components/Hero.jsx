import React from "react";
import logoHero from "../assets/hero/logoHero.png";
import "../assets/css/Hero.css";
import miniLogo from "../assets/hero/header_aspirity.svg";
import icon1 from "../assets/hero/twitter.png";
import icon2 from "../assets/hero/telegram.png";
import icon3 from "../assets/hero/discord.png";
import { Notices } from "./Notices";

export const Hero = () => {
  return (
    <div className="hero__global">
      <div className="hero__center">
        <div className="hero__socials">
          <a href="#">
            <img className="hero__social hero__icon1" src={icon1} alt={icon1} />
          </a>
          <a href="#">
            <img className="hero__social hero__icon2" src={icon2} alt={icon2} />
          </a>
          <a href="#">
            <img className="hero__social hero__icon3" src={icon3} alt={icon3} />
          </a>
        </div>
        <div className="hero__img">
          <img src={logoHero} alt={logoHero} />
        </div>
        <p>
          Modern Admin Template by <img src={miniLogo} alt={miniLogo} />
          <a href="#">Aspirity</a>
        </p>
        <div className="hero__title">
          <h1>
            Front-end has never<br></br>been so easy
          </h1>
        </div>
        <div className="hero__description">
          <p>
            Use 200+ clean coded components and 50+<br></br>pre-designed pages
            for your project.
          </p>
        </div>
        <Notices />
      </div>
    </div>
  );
};

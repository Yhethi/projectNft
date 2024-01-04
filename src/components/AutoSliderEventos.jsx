import React, { useEffect, useState } from "react";
import Aetheria from "../assets/universos/1_Aetheria.png";
import Celestis from "../assets/universos/2_Celestis.png";
import Temporalis from "../assets/universos/3_Temporalis.png";
import Spectra from "../assets/universos/4_Spectra.png";
import Etherium from "../assets/universos/5_Etherium.png";
import ARCANUM from "../assets/universos/6_ARCANUM.png";
import INFINITUM from "../assets/universos/7_INFINITUM.png";
import OBSCURA from "../assets/universos/8_OBSCURA.png";
import HARMONIA from "../assets/universos/9_HARMONIA.png";
import Málaga1 from "../assets/eventos/1_Málaga1.jpg";
import Malaga2 from "../assets/eventos/2_Malaga2.jpg";
import BUENOS_AIRES from "../assets/eventos/3_BUENOSAIRES.jpg";
import TULUM from "../assets/eventos/4_TULUM.jpg";
import TULUM1 from "../assets/eventos/5_TULUM1.jpg";
import SINGAPOU from "../assets/eventos/6_SINGAPOUR.jpg";
import DUBAI from "../assets/eventos/7_DUBAI.jpg";

import "../assets/scss/Carousel.scss";

export const AutoSliderEventos = () => {
  const [images, setImages] = useState([
    {
      name: "Aetheria",
      src: Aetheria,
    },
    {
      name: "Celestis",
      src: Celestis,
    },
    {
      name: "Temporalis",
      src: Temporalis,
    },
    {
      name: "Spectra",
      src: Spectra,
    },
    {
      name: "Etherium",
      src: Etherium,
    },
    {
      name: "ARCANUM",
      src: ARCANUM,
    },
    {
      name: "INFINITUM",
      src: INFINITUM,
    },
    {
      name: "OBSCURA",
      src: OBSCURA,
    },
    {
      name: "HARMONIA",
      src: HARMONIA,
    },
  ]);

  useEffect(() => {
    // const carousel_control_next = document.querySelector(
    //   ".carousel-control-next"
    // );
    // setTimeout(() => {
    //   carousel_control_next.click();
    // }, 3000);
    const carousel = document.querySelector(".carousel");
    setTimeout(() => {
      carousel_control_next.click();
    }, 1000);
  }, []);

  return (
    <div className="autoSlider__global">
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Málaga1} alt="Málaga" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Malaga2} alt="Málaga" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={BUENOS_AIRES}
              alt="Buenos Aires"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={TULUM} alt="Tulum" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={TULUM1} alt="Tulum" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={SINGAPOU} alt="Singapour" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={DUBAI} alt="Dubai" />
          </div>
        </div>
      </div>

      {/* <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Málaga1} alt="Málaga" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Malaga2} alt="Málaga" />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src={BUENOS_AIRES}
              alt="Buenos Aires"
            />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={TULUM} alt="Tulum" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={TULUM1} alt="Tulum" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={SINGAPOU} alt="Singapour" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={DUBAI} alt="Dubai" />
          </div>
        </div>
        <button
          className="carousel-control-prev tapButtons"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next tapButtons"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
};

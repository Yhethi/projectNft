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

  const onHandleChanger = () => {
    const imageChanger = document.getElementById("imageChanger");
    images.forEach((img, key) => {
      setTimeout(() => {
        imageChanger.src = img.src;
        console.log("paso", key, images.length - 1);
        if (parseInt(key) == parseInt(images.length - 1)) {
          setTimeout(() => {
            onHandleChanger();
          }, parseInt(2000));
        }
      }, parseInt(2000 * key));
    });
  };

  useEffect(() => {
    const carousel_control_next = document.querySelector(
      ".carousel-control-next"
    );
    setInterval(() => {
      carousel_control_next.click();
    }, 3000);
    // onHandleChanger();
  }, []);

  return (
    <div className="autoSlider__global">
      {/* <img id="imageChanger" src={images[0].src} alt={images[0].name} /> */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
        data-interval="3000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={Aetheria} alt="Aetheria" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Celestis} alt="Celestis" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={Temporalis} alt="Temporalis" />
          </div>
          {/* {images.map((item, key) => {
            console.log(item);
            return (
              <div className="carousel-item">
                <img className="d-block w-100" src={item.src} alt={item.name} />
              </div>
            );
          })} */}
        </div>
        <a
          className="carousel-control-prev tapButtons"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next tapButtons"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

import React, { useState } from "react";
// import logo from "../assets/header/logo.png";
import "../assets/css/Header.css";
import { FaChevronDown } from "react-icons/fa";
import googleTr from "../assets/header/googleTr.png";
import { ModalHome } from "./ModalHome";

export const Header = () => {
  const [option, setOption] = useState("");
  const [loader, setLoader] = useState(false);

  const onHandleOption = (texto) => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
    setOption(texto);
    const modal__global = document.querySelector(".modal__global");
    setTimeout(() => {
      modal__global.style.scale = "1";
      setTimeout(() => {
        modal__global.style.background = "#00000033";
      }, 200);
    }, 100);
  };

  return (
    <div className="header__global">
      {loader && (
        <>
          <ModalHome option={option} setLoader={setLoader} />
        </>
      )}
      <div className="logo">
        <h1 className="logoFont">HUMAN UNLEASH</h1>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark header__menu">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
                <FaChevronDown className="dropIcon" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    onHandleOption("manifiesto");
                    setLoader(true);
                  }}
                >
                  MANIFIESTO
                </a>
                <a
                  class="dropdown-item"
                  href="#"
                  onClick={() => {
                    onHandleOption("quien");
                    setLoader(true);
                  }}
                >
                  QUIEN
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Universo
                <FaChevronDown className="dropIcon" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Aetheria
                </a>
                <a class="dropdown-item" href="#">
                  Celestis
                </a>
                <a class="dropdown-item" href="#">
                  Temporalis
                </a>
                <a class="dropdown-item" href="#">
                  Spectra
                </a>
                <a class="dropdown-item" href="#">
                  Etherium
                </a>
                <a class="dropdown-item" href="#">
                  Arcanum
                </a>
                <a class="dropdown-item" href="#">
                  Infinitum
                </a>
                <a class="dropdown-item" href="#">
                  Obscura
                </a>
                <a class="dropdown-item" href="#">
                  Harmonia
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Comunidad
                <FaChevronDown className="dropIcon" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item comunidad__item" href="#">
                  Twitter
                </a>
                <a class="dropdown-item comunidad__item" href="#">
                  Telegram
                </a>
                <a class="dropdown-item comunidad__item" href="#">
                  Discord
                </a>
                <a class="dropdown-item comunidad__item" href="#">
                  Youtube
                </a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img className="googleTr" src={googleTr} alt={googleTr} />
                <FaChevronDown className="dropIcon" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  <p>Spanish</p>
                </a>
                <a class="dropdown-item" href="#">
                  <p>English</p>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

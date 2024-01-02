import React, { useEffect, useState } from "react";
import logo from "../assets/header/logo.png";
import "../assets/css/Header.css";
import { FaChevronDown } from "react-icons/fa";
import googleTr from "../assets/header/googleTr.png";
import { ModalHome } from "./ModalHome";
import {
  FaTiktok,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export const Header = ({ audio, section }) => {
  const [option, setOption] = useState("");
  const [loader, setLoader] = useState(false);

  const onHandleOption = (texto) => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    navbarCollapse.classList.remove("show");
    setOption(texto);
    setTimeout(() => {
      const modal__global = document.querySelector(".modal__global");
      if (modal__global !== null) {
        modal__global.style.scale = "1";
      }
      setTimeout(() => {
        if (modal__global !== null) {
          modal__global.style.background = "#000000AA";
        }
      }, 200);
    }, 100);
  };

  useEffect(() => {
    if (section === "universe") {
      const universe__button = document.querySelector(".universe__button");
      universe__button.click();
    }
  }, []);

  return (
    <div className="header__global">
      {loader && <ModalHome option={option} setLoader={setLoader} />}
      <div className="logo">
        {/* <h1 className="logoFont">HUMAN UNLEASH</h1> */}
        <Link to="/">
          <img
            src={logo}
            alt={logo}
            onClick={() => {
              audio.pause();
            }}
          />
        </Link>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark header__menu">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link logoFont"
                href="#"
                onClick={() => {
                  onHandleOption("about");
                  setLoader(true);
                }}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link logoFont"
                href="#"
                onClick={() => {
                  onHandleOption("manifiesto");
                  setLoader(true);
                }}
              >
                Manifiesto
              </a>
            </li>
            <li
              className="nav-item universe__button"
              onClick={() => {
                onHandleOption("universe");
                setLoader(true);
                audio.pause();
              }}
            >
              <Link
                className="nav-link logoFont universoButton"
                to={`/Universo`}
              >
                Universo
              </Link>
            </li>
            <div className="social__icons">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaTiktok />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaInstagram />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaDiscord />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <FaYoutube />
                </a>
              </li>
            </div>
            <li className="nav-item dropdown logoFont">
              <a
                className="nav-link"
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
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  <p>Spanish</p>
                </a>
                <a className="dropdown-item" href="#">
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

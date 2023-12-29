import React from "react";
// import logo from "../assets/header/logo.png";
import "../assets/css/Header.css";
import { FaChevronDown } from "react-icons/fa";
import googleTr from "../assets/header/googleTr.png";

export const Header = () => {
  return (
    <div className="header__global">
      <div className="logo">
        {/* <img src={logo} alt={logo} /> */}
        <h1 className="logoFont">HUMAN UNLEASH</h1>
      </div>
      <nav class="navbar navbar-expand-lg navbar-dark header__menu">
        {/* <a class="navbar-brand" href="#">
          Navbar
        </a> */}
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
            {/* <li class="nav-item active">
              <a class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li> */}
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
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
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
                Construir
                <FaChevronDown className="dropIcon" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
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
                Solutions
                <FaChevronDown className="dropIcon" />
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Solutions
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

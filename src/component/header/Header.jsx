import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FiX, FiMenu } from "react-icons/fi";

import logoDefault from "../../assets/images/logo/logo.png";
import logoLight from "../../assets/images/logo/logo-light.png";
import logoDark from "../../assets/images/logo/logo-dark.png";
import logoSymbolDark from "../../assets/images/logo/logo-symbol-dark.png";
import logoSymbolLight from "../../assets/images/logo/logo-symbol-light.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }

  menuTrigger() {
    document.querySelector(".header-wrapper").classList.toggle("menu-open");
  }

  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper").classList.remove("menu-open");
  }

  render() {
    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src={logoLight} alt="Digital Agency" />;
    } else if (logo === "dark") {
      logoUrl = <img src={logoDark} alt="Digital Agency" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src={logoSymbolDark} alt="Digital Agency" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src={logoSymbolLight} alt="Digital Agency" />;
    } else {
      logoUrl = <img src={logoDefault} alt="Digital Agency" />;
    }

    return (
      <header
        className={`header-area formobile-menu header--transparent ${color}`}
      >
        <div className="header-wrapper" id="header-wrapper">
          <div className="header-left">
            <div className="logo">
              <a href="/">{logoUrl}</a>
            </div>
          </div>
          <div className="header-right">
            <nav className="mainmenunav d-lg-block">
              <ul className="mainmenu">
                <li>
                  <Link to="/">Início</Link>
                </li>
                <li>
                  <Link to="/service-details">Serviços</Link>
                </li>
                <li>
                  <Link to="/about">Sobre</Link>
                </li>

                <li className="has-droupdown">
                  <Link to="#pages">Pages</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/blog">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/blog-details">Blog Details</Link>
                    </li>
                    <li>
                      <Link to="/service">Serviços</Link>
                    </li>
                    <li>
                      <Link to="/service-details">Service Details</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/portfolio-details">Portfolio Details</Link>
                    </li>
                    <li>
                      <Link to="/404">404</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-droupdown">
                  <Link to="#">Blocks</Link>
                  <ul className="submenu">
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/team">Team</Link>
                    </li>
                    <li>
                      <Link to="/service">Service</Link>
                    </li>
                    <li>
                      <Link to="/video-popup">Video Popup</Link>
                    </li>
                    <li>
                      <Link to="/progressbar">Progressbar</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/counters">Counters</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog List</Link>
                    </li>
                    <li>
                      <Link to="/clint-logo">Clint Logo</Link>
                    </li>
                    <li>
                      <Link to="/contact-form">Contact Form</Link>
                    </li>
                    <li>
                      <Link to="/google-map">Google Map</Link>
                    </li>
                    <li>
                      <Link to="/columns">Columns</Link>
                    </li>
                    <li>
                      <Link to="/pricing-table">Pricing Table</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/contact">Contato</Link>
                </li>
              </ul>
            </nav>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;

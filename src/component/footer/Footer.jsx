import React, { Component } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/luiza-simazaki-13073b1a5/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/luizasimazaki/" },
];

class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer-area">
          <div className="footer-wrapper">
            <div className="row align-items-end row--0 bg_color--1">
              <div className="col-lg-6">
                <div className="footer-left">
                  <div className="inner">
                    <span>Pronto para começar?</span>
                    <h2>
                      Vamos<br/> planejar
                    </h2>
                    <a className="rn-button-style--2" href="/contact">
                      <span>Fale Conosco</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="footer-right" data-black-overlay="6">
                  <div className="row">
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12">
                      <div className="footer-link">
                        <h4>Link rápido</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="/">Início</a>
                          </li>
                          <li>
                            <a href="/about">Sobre</a>
                          </li>
                          <li>
                            <a href="/contact">Contato</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* End Single Widget  */}
                    {/* Start Single Widget  */}
                    <div className="col-lg-6 col-sm-6 col-12 mt_mobile--30">
                      <div className="footer-link">
                        <h4>Diga olá</h4>
                        <ul className="ft-link">
                          <li>
                            <a href="mailto:luizasimazaki@gmail.com">luizasimazaki@gmail.com</a>
                          </li>
                          <li>
                          <a href="tel:+1 7862337681">+1 (561) 560-2537</a>
                          </li>
                        </ul>

                        <div className="social-share-inner">
                          <ul className="social-share social-style--2 d-flex justify-content-start liststyle mt--15">
                            {SocialShare.map((val, i) => (
                              <li key={i}>
                                <a href={`${val.link}`}>{val.Social}</a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Widget  */}

                    <div className="col-lg-12">
                      <div className="copyright-text">
                        <p>
                          Copyright © 2024 Luiza Simazaki. Todos os direitos reservados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}
export default Footer;

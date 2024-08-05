import React, { Component } from "react";
import ContactForm from "./ContactForm";
import about from "../../assets/images/about/about-6.jpg";

class ContactTwo extends Component {
  render() {
    return (
      <div className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <h2 className="title">Entre em Contato</h2>
                <p className="description">
                  Estamos aqui para responder a todas as suas dúvidas e ajudar você a alcançar seus objetivos financeiros. Entre em contato e descubra como podemos fazer a diferença.
                </p>
              </div>
              <div className="form-wrapper">
                <ContactForm />
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={about} alt="Contato" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContactTwo;

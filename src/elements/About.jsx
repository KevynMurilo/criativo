import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import BrandTwo from "../elements/BrandTwo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import about from "../assets/images/about/about-3.jpg";
import findingImg from "../assets/images/about/finding-us-01.png";
import teamImg1 from "../assets/images/team/team-01.jpg";
import teamImg2 from "../assets/images/team/team-03.jpg";
import teamImg3 from "../assets/images/team/team-02.jpg";

class About extends Component {
  render() {
    let title = "Consultoria Única",
      description =
        "Em um mercado financeiro diversificado, ofereço uma abordagem única que combina minha experiência e dedicação para proporcionar soluções personalizadas. Entendo suas metas financeiras e trabalho para superá-las com estratégias adaptadas às suas necessidades específicas. Comprometida com a transparência e a eficácia, garanto uma gestão financeira com o mais alto nível de profissionalismo e integridade.";
    return (
      <React.Fragment>
        <PageHelmet pageTitle="Sobre" />

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />
        {/* Start Breadcrumb Area */}
        <Breadcrumb title={"Sobre"} />
        {/* End Breadcrumb Area */}

        {/* Start About Area */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="rn-about-wrapper">
            <div className="container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="w-100"
                      src={about}
                      alt="About Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title">{title}</h2>
                      <p className="description">{description}</p>
                    </div>
                    <div className="row mt--30">
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                      <div className="about-us-list">
                          <h3 className="title">Minha Abordagem</h3>
                          <p>
                              Uso minha expertise financeira para criar soluções sob medida que atendem às suas necessidades específicas, garantindo um planejamento eficaz e personalizado.
                          </p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="about-us-list">
                            <h3 className="title">Minha Filosofia</h3>
                            <p>
                                Acredito na importância de um atendimento transparente e comprometido, oferecendo orientação financeira que visa não apenas atingir, mas superar suas expectativas e metas.
                            </p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Finding Us Area */}
        <div className="rn-finding-us-area rn-finding-us bg_color--1">
          <div className="inner">
            <div className="content-wrapper">
            <div className="content">
              <h4 className="theme-gradient">Transforme Seu Futuro Financeiro Hoje</h4>
              <p>
                Descubra como nossas soluções financeiras personalizadas podem ajudar você a atingir suas metas. Estamos comprometidos em fornecer orientação especializada e estratégias eficazes para garantir um futuro financeiro seguro e próspero para você e sua família.
              </p>
              <a className="rn-btn btn-white" href="/contact">
                Fale Conosco
              </a>
            </div>
            </div>
            <div className="thumbnail">
              <div className="image">
                <img src={findingImg} alt="Finding Images" />
              </div>
            </div>
          </div>
        </div>
        {/* End Finding Us Area */}

        {/* Start Testimonial Area */}
        <div className="rn-testimonial-area bg_color--1 ptb--120">
          <div className="container">
            <Testimonial />
          </div>
        </div>
        {/* End Testimonial Area */}


        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}

        <Footer />
      </React.Fragment>
    );
  }
}

export default About;

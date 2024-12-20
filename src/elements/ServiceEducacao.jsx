import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import serviceImg from "../assets/images/service/service-06.jpg";
import serviceImg2 from "../assets/images/service/service-05.jpg";

class ServiceEducacao extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <React.Fragment>
        {/* Start Pagehelmet  */}
        <PageHelmet pageTitle="Educação Financeira" />
        {/* End Pagehelmet  */}

        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--5"
          data-black-overlay="5"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title theme-gradient">Educação Financeira</h2>
                  <p>Entenda e otimize suas finanças pessoais com segurança e confiança.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Page Wrapper */}
        <div className="rn-service-details ptb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="service-details-inner">
                  <div className="inner">
                    {/* Start Single Area */}
                    <div className="row sercice-details-content pb--80 align-items-center">
                      <div className="col-lg-6 col-12">
                        <div className="thumb">
                          <img
                            className="w-100"
                            src={serviceImg}
                            alt="Service Images"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-12">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Oferecemos uma abordagem personalizada para a educação financeira, ajudando você a entender e gerenciar suas finanças com confiança. Nossos serviços são projetados para atender às suas necessidades específicas e oferecer orientação prática para otimizar seu planejamento financeiro.
                          </p>
                          <p>
                            Desde a criação de orçamentos eficientes até a análise de produtos de acumulação, trabalhamos para garantir que você esteja bem informado e preparado para tomar decisões financeiras seguras e eficazes.
                          </p>
                          <h4 className="title">Nossos Serviços Incluem:</h4>
                          <ul className="liststyle">
                            <li>Orientação personalizada para otimização financeira</li>
                            <li>Educação sobre estratégias de economia e acumulação</li>
                            <li>Análise detalhada do seu perfil financeiro</li>
                            <li>Desenvolvimento de planos financeiros sob medida</li>
                            <li>Orientação contínua e suporte para alcançar seus objetivos</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}

                    {/* Start Single Area */}
                    <div className="row sercice-details-content align-items-center">
                      <div className="col-lg-6 col-12 order-2 order-lg-1">
                        <div className="details mt_md--30 mt_sm--30">
                          <p>
                            Com uma abordagem detalhada e personalizada, oferecemos a você as ferramentas e o conhecimento necessários para gerenciar suas finanças de forma eficiente e eficaz.
                          </p>
                          <p>
                            Nosso objetivo é capacitar você a tomar decisões financeiras informadas e alcançar uma estabilidade financeira sustentável.
                          </p>
                          <h4 className="title">Nosso Processo de Trabalho</h4>
                          <ul className="liststyle">
                            <li>Análise inicial das suas necessidades financeiras</li>
                            <li>Desenvolvimento de um plano financeiro personalizado</li>
                            <li>Implementação e acompanhamento contínuo das estratégias</li>
                            <li>Reavaliação e ajustes conforme necessário</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-12 order-1 order-lg-2">
                        <div className="thumb position-relative">
                          <img
                            className="w-100"
                            src={serviceImg2}
                            alt="Service Images"
                          />
                          {/* <ModalVideo
                            channel="youtube"
                            isOpen={this.state.isOpen}
                            videoId="ZOoVOfieAF8"
                            onClose={() => this.setState({ isOpen: false })}
                          />
                          <button
                            className="video-popup"
                            onClick={this.openModal}
                          >
                            <span className="play-icon"></span>
                          </button> */}
                        </div>
                      </div>
                    </div>
                    {/* End Single Area */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Wrapper */}

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
export default ServiceEducacao;

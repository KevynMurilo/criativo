import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import serviceImg from "../assets/images/service/service-03.jpg";
import serviceImg2 from "../assets/images/service/service-04.jpg";

class ServiceAposentadoria extends Component {
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
        <PageHelmet pageTitle="Aposentadoria" />
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
                  <h2 className="title theme-gradient">Aposentadoria</h2>
                  <p>Oferecemos produtos para aposentadoria com renda garantida.</p>
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
                            Nossos produtos de aposentadoria são projetados para oferecer uma renda garantida, garantindo segurança e estabilidade financeira na sua aposentadoria.
                          </p>
                          <p>
                            Com uma variedade de opções, podemos ajudar você a encontrar o plano de aposentadoria que melhor se adapte às suas necessidades e objetivos financeiros de longo prazo.
                          </p>
                          <h4 className="title">Nosso Processo de Trabalho</h4>
                          <ul className="liststyle">
                            <li>Consulta inicial para entender suas necessidades</li>
                            <li>Análise detalhada do seu perfil financeiro</li>
                            <li>Recomendação de produtos adequados</li>
                            <li>Implementação e monitoramento contínuo</li>
                            <li>Ajustes conforme necessário para garantir resultados ótimos</li>
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
                            Nossos serviços são ideais para quem busca segurança financeira durante a aposentadoria. Com nossa expertise, você terá a tranquilidade de saber que sua renda está garantida.
                          </p>
                          <h4 className="title">Benefícios dos Produtos de Aposentadoria</h4>
                          <ul className="liststyle">
                            <li>Renda garantida na aposentadoria</li>
                            <li>Segurança e estabilidade financeira</li>
                            <li>Produtos confiáveis e bem avaliados</li>
                            <li>Planejamento personalizado para atender suas necessidades</li>
                            <li>Suporte contínuo e ajustes conforme necessário</li>
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
                          <ModalVideo
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
                          </button>
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
export default ServiceAposentadoria;

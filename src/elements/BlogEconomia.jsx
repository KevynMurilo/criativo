import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import imgOne from "../assets/images/blog/bl-big-03.jpg";
import imgTwo from "../assets/images/blog/blog-single-03.jpg";

class BlogEconomia extends Component {
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
        <PageHelmet pageTitle="Tendências Econômicas Atuais" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrump Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Tendências Econômicas Atuais <br /> e Seu Impacto no Mercado
                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      Agosto 5, 2024
                    </li>
                    <li>
                      <FiUser />
                      Luiza Simazaki
                    </li>
                    <li>
                      <FiMessageCircle />
                      20 Comentários
                    </li>
                    <li>
                      <FiHeart />
                      47 Curtidas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrump Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <p>
                      Em um mundo em constante mudança, acompanhar as tendências econômicas é crucial para tomar decisões informadas. Neste artigo, exploraremos as principais tendências econômicas atuais que estão moldando o mercado global. De inovações tecnológicas a mudanças nas políticas monetárias, entender essas tendências pode ajudar investidores e profissionais a antecipar oportunidades e riscos.
                    </p>
                    <div className="thumbnail">
                      <img src={imgOne} alt="Tendências Econômicas" />
                    </div>
                    <p className="mt--40">
                      A digitalização e a tecnologia continuam a desempenhar um papel central nas tendências econômicas atuais. A ascensão da inteligência artificial e do blockchain está transformando setores inteiros, desde serviços financeiros até manufatura. As empresas estão investindo em tecnologias emergentes para otimizar operações e criar novos modelos de negócios.
                    </p>
                    <p>
                      Além disso, as políticas monetárias dos principais bancos centrais têm um impacto significativo sobre os mercados. As decisões sobre taxas de juros e estímulos econômicos moldam o ambiente financeiro e influenciam a estabilidade econômica global. Em tempos de incerteza econômica, acompanhar essas políticas pode fornecer insights valiosos sobre a direção dos mercados.
                    </p>
                    <blockquote className="rn-blog-quote">
                      "A adaptação às mudanças econômicas é a chave para o sucesso em um mercado dinâmico e em rápida evolução."
                    </blockquote>
                    <p>
                      Outra tendência importante é o crescimento das economias emergentes. Países em desenvolvimento estão se tornando centros de crescimento econômico, com mercados em expansão e novas oportunidades de investimento. A diversificação geográfica pode ser uma estratégia eficaz para investidores que buscam aproveitar o potencial desses mercados em ascensão.
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                      <div className="thumbnail">
                        <img className="w-100" src={imgTwo} alt="Economia Global" />
                        <span>
                          O impacto das economias emergentes no mercado global.
                        </span>
                      </div>
                      <div className="content">
                        <p>
                          As tendências econômicas atuais oferecem um panorama fascinante do futuro dos mercados. De mudanças tecnológicas a políticas monetárias, esses fatores estão moldando a economia global de maneiras complexas e interligadas. Manter-se atualizado sobre essas tendências é essencial para qualquer profissional que deseja se destacar no ambiente econômico atual.
                        </p>
                        <h4 className="title">Principais Tendências:</h4>
                        <ul className="list-style">
                          <li>Ascensão da inteligência artificial e automação</li>
                          <li>Impacto das políticas monetárias e fiscais</li>
                          <li>Crescimento das economias emergentes</li>
                          <li>Sustentabilidade e investimentos responsáveis</li>
                        </ul>
                      </div>
                    </div>

                    <p className="mt--25 mt_sm--5">
                      O entendimento dessas tendências pode proporcionar uma vantagem competitiva, permitindo que empresas e investidores se adaptem rapidamente às mudanças do mercado. Com uma visão clara das forças econômicas em jogo, é possível tomar decisões mais informadas e estratégicas.
                    </p>
                    <div className="video-wrapper position-relative mb--40">
                      <div className="thumbnail">
                        <img src={imgOne} alt="Vídeo sobre Economia" />
                      </div>
                      {/* <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="ZOoVOfieAF8"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button
                        className="video-popup position-top-center"
                        onClick={this.openModal}
                      >
                        <span className="play-icon"></span>
                      </button> */}
                    </div>
                    <p className="mb--0">
                      Acompanhar as tendências econômicas é uma parte essencial da gestão financeira e da estratégia de proteção do patrimônio e acumulaçãode riquezas. Manter-se informado e adaptável é fundamental para navegar com sucesso em um cenário econômico em constante evolução.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Details */}

        {/* Start Blog Comment Form  */}
        <div className="blog-comment-form pb--120 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  <h3 className="title mb--40 fontWeight500">Deixe um Comentário</h3>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="rnform-group">
                          <input type="text" placeholder="Nome" />
                        </div>
                        <div className="rnform-group">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="rnform-group">
                          <input type="text" placeholder="Telefone" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-12">
                        <div className="rnform-group">
                          <textarea
                            type="text"
                            placeholder="Comentário"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="blog-btn">
                          <Link
                            className="rn-button-style--2 btn-solid"
                            to="/blog-details"
                          >
                            <span>ENVIAR MENSAGEM</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Blog Comment Form  */}

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
export default BlogEconomia;

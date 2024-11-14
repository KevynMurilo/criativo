import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import imgOne from "../assets/images/blog/bl-big-02.jpg";
import imgTwo from "../assets/images/blog/blog-single-02.jpg";

class BlogPatrimonio extends Component {
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
        <PageHelmet pageTitle="Blog Details" />
        <Header
          headertransparent="header--transparent"
          colorblack="color--black"
          logoname="logo.png"
        />

        {/* Start Breadcrumb Area */}
        <div
          className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
          data-black-overlay="7"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-single-page-title text-center pt--100">
                  <h2 className="title theme-gradient">
                    Como Gerenciar Seu Patrimônio
                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      18 de Maio, 2024
                    </li>
                    <li>
                      <FiUser />
                      Luiza Simazaki
                    </li>
                    <li>
                      <FiMessageCircle />
                      15 Comentários
                    </li>
                    <li>
                      <FiHeart />
                      32 Curtidas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <p>
                      Saiba da importância de um orçamento bem elaborado. Conheça suas receitas e despesas. Identifique áreas onde é possível economizar ou até eliminar de sua vida financeira (funil financeiro).
                    </p>
                    <div className="thumbnail">
                      <img src={imgOne} alt="Blog Images" />
                    </div>
                    <blockquote className="rn-blog-quote">
                      "Planejamento financeiro é sobre equilibrar suas necessidades atuais com suas metas futuras." - Anônimo
                    </blockquote>
                    <p>
                      Gerenciar suas finanças não é uma tarefa fácil, mas com dedicação e as ferramentas certas, é possível construir um patrimônio sólido e sustentável.
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                      <div className="thumbnail">
                        <img className="w-100" src={imgTwo} alt="Blog Images" />
                      </div>
                      <div className="content">
                        <h4 className="title">Dicas de Gerenciamento:</h4>
                        <ul className="list-style">
                          <li>Defina metas financeiras claras e alcançáveis.</li>
                          <li>Crie e mantenha um orçamento mensal.</li>
                          <li>Invista em uma educação financeira contínua.</li>
                          <li>Diversifique seus investimentos.</li>
                          <li>Consulte profissionais quando necessário.</li>
                        </ul>
                        <h4 className="title">Benefícios de um Bom Gerenciamento:</h4>
                        <ul className="list-style">
                          <li>Maior segurança financeira.</li>
                          <li>Capacidade de lidar com imprevistos.</li>
                          <li>Aumento do patrimônio ao longo do tempo.</li>
                          <li>Tranquilidade e menos estresse financeiro.</li>
                        </ul>
                      </div>
                    </div>
                    <p className="mt--25 mt_sm--5">
                      Com essas orientações você estará no caminho certo para gerenciar seu patrimônio de maneira eficiente e alcançar suas metas financeiras.
                    </p>
                    <div className="video-wrapper position-relative mb--40">
                      <div className="thumbnail">
                        <img src={imgOne} alt="Blog Images" />
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
                      Lembre-se, a chave para o sucesso financeiro é a disciplina e a educação contínua. Com o tempo, você verá os frutos do seu esforço.
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

export default BlogPatrimonio;

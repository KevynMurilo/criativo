import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import imgOne from "../assets/images/blog/bl-big-04.jpg";
import imgTwo from "../assets/images/blog/blog-single-04.jpg";

class BlogAposentadoria extends Component {
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
        <PageHelmet pageTitle="Dicas para Aposentadoria Financeira" />
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
                    Dicas para Aposentadoria Financeira
                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock />
                      August 5, 2024
                    </li>
                    <li>
                      <FiUser />
                      Luiza Simazaki
                    </li>
                    <li>
                      <FiMessageCircle />
                      5 Comentários
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
        {/* End Breadcrumb Area */}

        {/* Start Blog Details */}
        <div className="rn-blog-details pt--110 pb--70 bg_color--1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner-wrapper">
                  <div className="inner">
                    <p>
                      Planejar a aposentadoria é essencial para garantir uma aposentadoria tranquila e sem preocupações financeiras. A seguir, apresentamos algumas dicas importantes para ajudá-lo a preparar seu futuro financeiro.
                    </p>
                    <div className="thumbnail">
                      <img src={imgOne} alt="Blog Images" />
                    </div>
                    <p className="mt--40">
                      Comece a economizar cedo. Quanto mais cedo você começar a poupar, mais tempo seu dinheiro terá para crescer. Aproveite os benefícios dos juros compostos e estabeleça uma rotina de poupança regular.
                    </p>
                    <p>
                      Diversifique seus investimentos. Não coloque todos os seus recursos em um único tipo de investimento. Explore diferentes opções, como ações, títulos e fundos imobiliários, para equilibrar riscos e retornos.
                    </p>
                    <blockquote className="rn-blog-quote">
                      "A melhor maneira de prever o futuro é criá-lo." - Peter Drucker
                    </blockquote>
                    <p>
                      Revise seu plano de aposentadoria regularmente. As circunstâncias e os objetivos podem mudar ao longo do tempo, por isso é importante revisar e ajustar seu plano conforme necessário.
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                      <div className="thumbnail">
                        <img className="w-100" src={imgTwo} alt="Blog Images" />
                        <span>
                          Dicas para uma aposentadoria segura e confortável
                        </span>
                      </div>
                      <div className="content">
                        <h4 className="title">Dicas Essenciais:</h4>
                        <ul className="list-style">
                          <li>Defina metas claras de aposentadoria.</li>
                          <li>Considere planos de previdência privada.</li>
                          <li>Elabore um orçamento e controle seus gastos.</li>
                          <li>Consulte um planejador financeiro para obter orientação especializada.</li>
                        </ul>
                      </div>
                    </div>

                    <p className="mt--25 mt_sm--5">
                      Ao seguir essas dicas, você estará no caminho certo para garantir uma aposentadoria tranquila e segura. Lembre-se de que o planejamento financeiro é um processo contínuo e deve ser adaptado conforme suas necessidades e objetivos evoluem.
                    </p>
                    <div className="video-wrapper position-relative mb--40">
                      <div className="thumbnail">
                        <img src={imgOne} alt="Blog Images" />
                      </div>
                      <ModalVideo
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
                      </button>
                    </div>
                    <p className="mb--0">
                      Continue se educando sobre finanças e aposentadoria para tomar decisões informadas e eficazes. Uma boa preparação agora pode resultar em uma aposentadoria mais confortável no futuro.
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

export default BlogAposentadoria;

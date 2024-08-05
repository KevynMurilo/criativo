import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import { FiClock, FiUser, FiMessageCircle, FiHeart, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import Header from "../component/header/Header";
import Footer from "../component/footer/Footer";

import imgOne from "../assets/images/blog/bl-big-01.jpg";
import imgTwo from "../assets/images/blog/blog-single-01.png";

class BlogEstrategia extends Component {
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
        <PageHelmet pageTitle="Estratégias para os juros compostos trabalharem ao seu favor" />
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
                    Estratégias para os juros compostos trabalharem ao seu favor
                  </h2>
                  <ul className="blog-meta d-flex justify-content-center align-items-center">
                    <li>
                      <FiClock /> 2 de agosto de 2024
                    </li>
                    <li>
                      <FiUser /> Luiza Simazaki
                    </li>
                    <li>
                      <FiMessageCircle /> 15 Comentários
                    </li>
                    <li>
                      <FiHeart /> 32 Curtidas
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
                      O sucesso financeiro não é apenas uma questão de sorte. Envolve planejamento estratégico e uma compreensão clara dos produtos financeiros disponíveis. Aqui estão algumas estratégias comprovadas que podem ajudá-lo a alcançar sucesso com segurança e tranquilidade.
                    </p>
                    <div className="thumbnail">
                      <img src={imgOne} alt="Blog Images" />
                    </div>
                    <p className="mt--40">
                      Primeira orientação é definir metas claras e realistas. Saber o que você quer alcançar com seu dinheiro acumulado e tomar decisões mais informadas, disciplinadas e realistas.
                    </p>
                    <p>
                      "Profit First": Pague a você primeiro, guarde mensalmente um valor entre 10% a 20% de seu rendimento mensal. Os juros compostos, somados ao fator tempo, farão a bola de neve crescer de forma vertiginosa.
                    </p>
                    <blockquote className="rn-blog-quote">
                      "A segurança financeira é alcançada através de estratégias inteligentes e produtos financeiros confiáveis." - Autor Desconhecido
                    </blockquote>
                    <p>
                      Lembre-se de que o sucesso financeiro não acontece da noite para o dia. Requer paciência, diligência e uma abordagem disciplinada. Com as estratégias certas, você pode construir um patrimônio sonhado e atingir seus objetivos financeiros.
                    </p>
                    <p>
                      Segundo, considere produtos de acumulação financeira indexados na Bolsa de Valores (S&P 500), mas com piso zero. Isso significa que, mesmo que o mercado caia, você não terá perdas. Este tipo de produto oferece uma oportunidade de crescimento enquanto protege seu capital contra ações judiciais e falências.
                    </p>
                    <p>
                      Terceiro, há instrumentos financeiros que podem oferecer renda vitalícia garantida e livre de impostos, fornecendo segurança financeira no longo prazo, independentemente das flutuações do mercado.
                    </p>
                    <div className="blog-single-list-wrapper d-flex flex-wrap">
                      <div className="thumbnail">
                        <img className="w-100" src={imgTwo} alt="Blog Images" />
                        <span>
                          Monitoramento constante e reavaliação de estratégias são fundamentais.
                        </span>
                      </div>
                      <div className="content">
                        <h4 className="title">Dicas Práticas:</h4>
                        <ul className="list-style">
                          <li>Invista regularmente, mesmo que sejam pequenos montantes.</li>
                          <li>Reinvista seus dividendos e juros para acelerar o crescimento.</li>
                          <li>Evite tomar decisões impulsivas baseadas em emoções.</li>
                          <li>Considere os custos e taxas associados a cada produto financeiro.</li>
                          <li>Consulte um agente financeiro</li>
                        </ul>
                      </div>
                    </div>

                    <p className="mt--25 mt_sm--5">
                      Com essas dicas, você estará no caminho certo para gerenciar seu patrimônio de maneira eficiente e alcançar suas metas financeiras.
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
                      Esperamos que estas dicas ajudem você a trilhar um caminho de sucesso financeiro. Continue aprendendo e ajustando suas estratégias conforme necessário.
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

export default BlogEstrategia;

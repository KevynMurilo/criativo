import React, { Component, Fragment } from "react";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import Slider from "react-slick";
import { slideSlick } from "../page-demo/script";
import BlogContent from "../elements/blog/BlogContent";
import Header from "../component/header/HeaderFive";
import FooterTwo from "../component/footer/FooterTwo";
import CallAction from "../elements/callaction/CallAction";
import Accordion01 from "../elements/Accordion";
import Helmet from "../component/common/Helmet";
import corporate01 from "../assets/images/featured/corporate-01.jpg";
import corporate02 from "../assets/images/featured/corporate-02.jpg";
import corporate03 from "../assets/images/featured/corporate-03.jpg";
import { FaChalkboardTeacher, FaShieldAlt, FaUmbrella } from "react-icons/fa";

import {
  FiLayers,
  FiChevronUp,
  FiCheck,
  FiSmartphone 
} from "react-icons/fi";

import about from "../assets/images/about/about.jpg";
import about2 from "../assets/images/about/about-3.png";

const SlideList = [
  {
    textPosition: "text-right",
    bgImage: "bg_image--32",
    category: "",
    title: "Serviços financeiros",
    description:
      "Ofereço serviços financeiros especializados com rendimentos garantidos e sem riscos.",
    buttonText: "Entre em Contato",
    buttonLink: "/contact",
  },
  {
    textPosition: "text-left",
    bgImage: "bg_image--31",
    category: "",
    title: "Educação Financeira",
    description:
      "Ajudo você a organizar suas finanças com segurança e obter rendimentos sólidos e garantidos, sem perdas.",
    buttonText: "Entre em Contato",
    buttonLink: "/contact",
  },
];

const ServiceListOne = [
  {
    icon: <FaChalkboardTeacher />,
    title: "Educação Financeira",
    description: "Oferecemos educação financeira para que você possa entender e otimizar suas finanças pessoais com segurança.",
    link: "/service-educacao"
    
  },
  {
    icon: <FaShieldAlt />,
    title: "Planejamento Seguro",
    description: "Serviços de consultoria para garantir que sua família esteja protegida e você tenha um futuro promissor, sem perdas e de forma vitalícia.",
    link: "/service-planejamento"
  },
  {
    icon: <FaUmbrella  />,
    title: "Aposentadoria",
    description: "Oferecemos produtos para aposentadoria com renda garantida e regulada pelo governo federal.",
    link: "/service-aposentadoria"
  },
];


const starndardService = [
  {
    image: corporate01,
    title: "Educação Financeira",
    description: "Oferecemos educação financeira para que você possa entender e otimizar suas finanças pessoais com segurança.",
  },
  {
    image: corporate02,
    title: "Planejamento Seguro",
    description: "Serviços de consultoria para garantir que sua família esteja protegida e você tenha um futuro promissor, sem perdas e de forma vitalícia.",
  },
  {
    image: corporate03,
    title: "Aposentadoria",
    description: "Oferecemos produtos para aposentadoria com renda garantida e regulada pelo governo federal.",
  },
];


class CorporateBusiness extends Component {
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
    var namesItemOne = [
      "Análise Profunda dos Dados Financeiros",
      "Otimização Rápida dos Recursos Financeiros",
      "Mitos e Verdades sobre Investimentos",
      "Estratégias Exclusivas para Maximização de Lucros",
    ];
    var namesItemTwo = [
      "Evidências de Sucesso em Consultoria Financeira",
      "Ações Recomendadas para Gestão Eficiente",
      "Desvendando os Segredos do Mercado Financeiro",
    ];

    const PostList = BlogContent.slice(0, 3);

    return (
      <Fragment>
        <Helmet pageTitle="Início" />

        {/* Start Header Area  */}
        <Header
          headerPosition="header--static logoresize"
          logo="all-dark"
          color="color-black"
        />
        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className="slider-wrapper">
          <div className="slider-activation">
            <Slider className="rn-slick-dot dot-light" {...slideSlick}>
              {SlideList.map((value, index) => (
                <div
                  className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                  key={index}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className={`inner ${value.textPosition}`}>
                          {value.category ? <span>{value.category}</span> : ""}
                          {value.title ? (
                            <h1 className="title">{value.title}</h1>
                          ) : (
                            ""
                          )}
                          {value.description ? (
                            <p className="description">{value.description}</p>
                          ) : (
                            ""
                          )}
                          {value.buttonText ? (
                            <div className="slide-btn">
                              <a
                                className="rn-button-style--2 btn-solid"
                                href={`${value.buttonLink}`}
                              >
                                {value.buttonText}
                              </a>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Service Area */}
        <div className="service-area ptb--30 bg_color--1">
          <div className="container">
            <div className="row service-one-wrapper">
              {ServiceListOne.map((val, i) => (
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12"
                  key={i}
                >
                  <a className="text-center" href={val.link}>
                    <div className="service service__style--2">
                      <div className="icon">{val.icon}</div>
                      <div className="content">
                        <h3 className="title">{val.title}</h3>
                        <p>{val.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Service Area */}
        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--1">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-6">
                <div className="thumbnail">
                  <img className="w-100" src={about} alt="About Images" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">Sobre Mim</h2>
                    <p>
                      Meu nome é Luiza Simazaki e sou agente de serviços financeiros licenciada. Meu objetivo é proporcionar, através da Educação Financeira, proteção à família e a quem traz renda para casa, além de escolher produtos de acumulação que proporcionarão renda garantida, sem perdas e taxa grátis.
                    </p>
                  </div>
                  <div className="accordion-wrapper mt--30">
                    <Accordion01 />
                  </div>
                  <div className="about-button mt--50">
                    <a className="rn-button-style--2 btn-solid" href="/about">
                      Saiba Mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* End About Area  */}

        {/* Start About Area  */}
        <div className="rn-about-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row row--35 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title">O Que Ofereço</h2>
                    <p className="description">
                      Ofereço soluções financeiras personalizadas que atendem às suas necessidades individuais e superam suas expectativas. Com ampla experiência e dedicação, proporciono a melhor abordagem para otimizar suas finanças e alcançar seus objetivos.
                    </p>
                  </div>
                  <div className="mt--30">
                    <h4>Áreas de Expertise</h4>
                    <ul className="list-style--1">
                      {namesItemOne.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> {name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="mt--30">
                    <h4>Insights e Recomendações</h4>
                    <ul className="list-style--1">
                      {namesItemTwo.map((name, index) => {
                        return (
                          <li key={index}>
                            <FiCheck /> {name}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="section-title mt--30">
                      <p className="description">
                      Veja ao lado um depoimento sobre como minhas soluções financeiras transformaram as finanças de um cliente.
                    </p>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="thumbnail position-relative">
                  <img
                    className="w-100"
                    src={about2}
                    alt="About Images"
                  />
                  <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="a0a6y605DNk"
                    onClose={() => this.setState({ isOpen: false })}
                  />
                  <button
                    className="video-popup position-top-center theme-color"
                    onClick={this.openModal}
                  >
                    <span className="play-icon"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area  */}

        {/* Start Blog Area */}
        <div className="rn-blog-area pt--120 pb--80 bg_color--1">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-12">
                <div className="section-title service-style--3 text-center">
                  <h2 className="title">Blog de Finanças</h2>
                  <p>
                      Explore nossos artigos mais recentes sobre estratégias financeiras e investimentos.
                  </p>
              </div>
              </div>
            </div>
            <div className="row mt--60">
              {PostList.map((value, i) => (
                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                  <div className="blog blog-style--1">
                    <div className="thumbnail">
                      <a href={value.link}>
                        <img
                          className="w-100"
                          src={value.images}
                          alt="Blog Images"
                        />
                      </a>
                    </div>
                    <div className="content">
                      <p className="blogtype">{value.category}</p>
                      <h4 className="title">
                        <a href={value.link}>{value.title}</a>
                      </h4>
                      <div className="blog-btn">
                        <a className="rn-btn text-white" href={value.link}>
                          Leia mais
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* End Blog Area */}

        {/* Start call To Action  */}
        <CallAction />
        {/* End call To Action  */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}

        {/* Start Back To Top */}
        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
      </Fragment>
    );
  }
}
export default CorporateBusiness;

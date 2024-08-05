import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import testimonialImg1 from "../assets/images/client/testimonial-1.jpg";
import testimonialImg2 from "../assets/images/client/testimonial-2.jpg";
import testimonialImg3 from "../assets/images/client/testimonial-3.jpg";
import testimonialImg4 from "../assets/images/client/testimonial-4.jpg";
import testimonialImg5 from "../assets/images/client/testimonial-5.jpg";
import testimonialImg6 from "../assets/images/client/testimonial-6.jpg";
import testimonialImg7 from "../assets/images/client/testimonial-7.jpg";
import testimonialImg8 from "../assets/images/client/testimonial-8.jpg";

class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Os serviços financeiros fornecidos pela empresa foram excepcionais e atenderam todas as minhas necessidades.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>João Silva</span> - Gerente Financeiro
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      A consultoria financeira que recebi foi excelente e me ajudou a alcançar meus objetivos.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Pedro Lima</span> - Diretor Financeiro
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      A Luiza foi muito profissional e me orientou de maneira eficaz.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Lucas Fernandes</span> - CEO
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      Fiquei impressionada com a profundidade do conhecimento financeiro da Luiza.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Maria Oliveira</span> - CFO
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      A consultoria prestada foi essencial para melhorar a saúde financeira da minha empresa.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Ana Souza</span> - Diretor Financeiro
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      O suporte financeiro contínuo tem sido vital para o crescimento sustentável do nosso negócio.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Carlos Mendes</span> - Analista Financeiro
                    </h6>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      A parceria financeira com a empresa nos deu a confiança para expandir nossas operações.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Fernanda Ribeiro</span> - Consultora Financeira
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="rn-testimonial-content text-center">
                  <div className="inner">
                    <p>
                      O conhecimento técnico e a experiência da equipe financeira foram cruciais para o nosso sucesso.
                    </p>
                  </div>
                  <div className="author-info">
                    <h6>
                      <span>Julia Santos</span> - Diretora de Investimentos
                    </h6>
                  </div>
                </div>
              </TabPanel>

              <TabList className="testimonial-thumb-wrapper">
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg1} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg2} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg3} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg4} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg5} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg6} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg7} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
                <Tab>
                  <div className="testimonial-thumbnai">
                    <div className="thumb">
                      <img src={testimonialImg8} alt="Testimonial Images" />
                    </div>
                  </div>
                </Tab>
              </TabList>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Testimonial;

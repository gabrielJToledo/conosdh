import React, { useState } from "react";
import "./Home.css";

import Slider from "../slider/Slider";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const gis = require("../../assets/gis.png");
const btnSchedule = require("../../assets/btnSchedule.png");

const accordionData = [
  {
    title: "Cultura <br /> Organizacional",
    content: "• Construção da Identidade empresarial: Missão, Visão e Valores <br /> • Identificação de Competências <br /> • Organizacionais <br /> • Diagnósticos e intervenções para as culturas já existentes."
  },

  {
    title: "Recrutamento <br /> e Seleção",
    content: "• Engenharia de Cargo <br /> • Processo Seletivo <br /> • Identificação de Talentos e Competências"
  },

  {
    title: "Consultoria <br /> e Processos",
    content: "• Planejamento Estratégico <br /> • Estrutura Organizacional <br /> • Políticas e Procedimentos de RH"
  },

  {
    title: "Clima <br /> Organizacional",
    content: "• Employee Experience <br /> • Pesquisa de Clima <br /> • Estratégias de Melhoria e Engajamento"
  },

  {
    title: "Liderança <br /> de Equipes",
    content: "• Academia de Liderança <br /> • Capacitação de novos líderes <br /> • Mentoria e coaching de performance"
  },

  {
    title: "Programas de <br /> Desenvolvimento Humano",
    content: "• Treinamentos - Educação Corporativa <br /> • Avaliação de Competências <br /> • PDI <br /> • Perfil Comportamental"
  },

  {
    title: "Mentoria <br /> e Coaching",
    content: "• Mentoria para Executivos <br /> • Coaching carreira e vida <br /> • Teste Vocacional"
  },

  {
    title: "Team Building <br /> e Corporativo",
    content: "• Imersão de Autoconhecimento e Resultado <br /> • Atividades para unir, engajar, motivar e criar comportamentos <br /> • Desdobramentos Estratégicos para equipe"
  },

];

function Home() {
  const [expandedIndex, setExpandedIndex] = useState(false);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? false : index);
  };
  return (
    <section className="c-homeContent">
      {/* <section className="c-sliderContainer">
                <Slider />
            </section> */}

      <div className="c-space-divider"></div>

      <div className="c-aboutUs">
        <div className="c-aboutUs_txt">
          <h2>
            Transformando vidas, carreiras e <br />
            empresas com o poder do conhecimento.
          </h2>

          <p>
            Com mais de 15 anos de experiência, a Conoscenza DHO <br /> utiliza técnicas da neurociência do comportamento para <br /> criar equipes de alta performance, fortalecer a cultura <br /> organizacional e impulsionar seus resultados.
          </p>

          <a href="" title="Agendar">
            <img className="c-btnSchedule" src={btnSchedule} alt="Agendar" />
          </a>
        </div>

        <img className="c-img_gis" src={gis} alt="" />
      </div>

      <div className="c-space-divider"></div>

      <div className="c-container" id="servicesLink">
        {accordionData.map((item, index) => (
        <div key={index} className={`c-serviceCard card${index + 1}`}>
            <p dangerouslySetInnerHTML={{ __html: item.title }} className="c-serviceCard-head"></p>
            <Accordion
              expanded={expandedIndex === index}
              onChange={() => handleToggle(index)}
              sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ padding: 0 }}
              >

              </AccordionSummary>
              <AccordionDetails sx={{ padding: 0 }}>
                <Typography className="c-serviceCard-txt" dangerouslySetInnerHTML={{ __html: item.content }} />
              </AccordionDetails>
            </Accordion>

            <button className="c-btn-knowmore" onClick={() => handleToggle(index)}>
              {expandedIndex === index ? 'Mostrar Menos -' : 'Mostrar Mais +'}
            </button>
          </div>))}

      </div>

      {/* <div className="c-space-divider"></div> */}
    </section>
  );
}

export default Home;

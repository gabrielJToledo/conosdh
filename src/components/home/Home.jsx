import React, { useState } from "react";
import "./Home.css";

import Slider from "../slider/Slider";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { TextField, Button, Box } from '@mui/material';
import InputMask from 'react-input-mask';

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

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: ""
  });
  const [message, setMessage] = useState("");


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("path/to/your/backend.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData)
      });
      const result = await response.text();
      setMessage(result);
    } catch (error) {
      setMessage("Erro ao enviar o e-mail.");
    }
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

          <a target="_blank" href="https://wa.me/5512996123692?text=Olá,%20gostaria%20de%20mais%20informações." title="Agendar">
            <img className="c-btnSchedule" src={btnSchedule} alt="Agendar" />
          </a>
        </div>

        <img className="c-img_gis" src={gis} alt="" />
      </div>

      <div className="c-space-divider"></div>

      <div className="c-container" id="servicesLink">
        <div className="c-services_container">
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

      </div>

      <div className="c-talkToUs" id="contactSection">
        <div className="c-talkToUs-contact">
          <h2>Fale Conosco</h2>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '100%' },
              '& .MuiButton-root': { m: 1, width: '100%' }
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <TextField
              required
              id="nome"
              label="Nome"
              variant="outlined"
              placeholder="Digite seu nome..."
              value={formData.nome}
              onChange={handleChange}
            />
            <TextField
              required
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Digite seu e-mail..."
              value={formData.email}
              onChange={handleChange}
            />
            <InputMask
              mask="(99) 99999-9999"
              maskChar=" "
              value={formData.telefone}
              onChange={handleChange}
            >
              {() => (
                <TextField
                  required
                  id="telefone"
                  label="Telefone"
                  variant="outlined"
                  placeholder="Digite seu telefone..."
                  type="tel"
                />
              )}
            </InputMask>
            <TextField
              id="mensagem"
              label="Mensagem"
              variant="outlined"
              placeholder="Digite sua mensagem..."
              multiline
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
            />
            <Button
              variant="contained"
              type="submit"
              className="c-talkToUs-btn"
            >
              Enviar!
            </Button>
            {message && <p>{message}</p>}
          </Box>

        </div>

        <div className="c-talkToUs_form">

        </div>
      </div>
    </section>
  );
}

export default Home;

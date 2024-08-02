import React, { useState } from "react";
import "./Home.css";
import '../products/Products.css'

import Slider from "../slider/Slider";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { TextField, Button, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import InputMask from 'react-input-mask';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Library - Conoscenza
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import imgEbook from '../../assets/imgs/ebook.jpg'
import imgEDisc from '../../assets/imgs/disc.jpg'

import pdfDisc from '../../assets/pdf/ebook-cnv_conoscenza.pdf'
import pdfTeste from '../../assets/pdf/teste-perfil-disc-conocscenza.pdf'

const gis = require("../../assets/gis.png");
const btnSchedule = require("../../assets/btnSchedule.png");

const accordionData = [
  {
    title: "Cultura <br /> Organizacional",
    content: "• Construção da Identidade empresarial: Missão, Visão e Valores <br /> • Identificação de Competências Organizacionais <br /> • Diagnósticos e intervenções para as culturas já existentes."
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
    title: "NEUROCIENCIA <br /> PARA LIDERES",
    content: "• Academia de Liderança <br /> • Formação de novos líderes <br /> • Mentoria e coaching de desempenho"
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
  const [openModal, setOpenModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.nome) {
      tempErrors.nome = "Nome é obrigatório.";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "E-mail é obrigatório.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "E-mail inválido.";
      isValid = false;
    }
    if (!formData.telefone) {
      tempErrors.telefone = "Telefone é obrigatório.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleModalOpen = (pdf) => {
    setSelectedPdf(pdf);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setSelectedPdf(null);
  };

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
    if (!validateForm()) {
      return;
    }

    try {
      const params = new URLSearchParams();
      for (const key in formData) {
        params.append(key, formData[key]);
      }

      await axios.post("./backend/sendEmail.php", params);

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: ""
      });

      setMessage("Formulário enviado com sucesso!");
      handleSnackbarOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState(false);

  const handleSnackbarOpen = () => {
    setOpen(true);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };


  return (
    <section className="c-homeContent">
      {/* <section className="c-sliderContainer">
                <Slider />
            </section> */}

      <div className="c-space-divider"></div>

      <div className="c-aboutUs">
        <img className="c-img_gis-mobile show-mobile" src={gis} alt="Gislaine Lavinia" title="Gislaine Lavinia" />

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

        <img className="c-img_gis" src={gis} alt="Gislaine Lavinia" title="Gislaine Lavinia" />
      </div>

      <div className="c-space-divider service"></div>

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

      <section className="c-products">

        <div id="libraryId" className='c-products-container'>
          <h2>Biblioteca</h2>

          <div className='c-products-list'>
            <Card className='c-product-inList'>
              <CardMedia
                component="img"
                alt="E-book Conoscenza"
                height="180"
                image={imgEbook}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  E-book Comunicação Não Violenta
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleModalOpen(pdfDisc)}>Baixar</Button>
              </CardActions>
            </Card>

            <Card className='c-product-inList'>
              <CardMedia
                component="img"
                alt="E-book Conoscenza"
                height="180"
                image={imgEDisc}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Teste Aqui Teu Perfil Predominante
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleModalOpen(pdfTeste)}>Baixar</Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </section>

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
          </Box>

        </div>

        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={handleSnackbarClose}
            severity="success"
          >
            {message}
          </MuiAlert>
        </Snackbar>

      </div>

      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>Baixar PDF</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Para baixar o PDF, por favor preencha o formulário abaixo:
          </DialogContentText>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '100%' },
              '& .MuiButton-root': { width: '100%' }
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e) => {
              handleSubmit(e);
              if (validateForm()) {
                handleModalClose();
                window.open(selectedPdf, '_blank');
              }
            }}
          >
            <TextField
              required
              className="my-2"
              id="nome"
              label="Nome"
              variant="outlined"
              placeholder="Digite seu nome..."
              value={formData.nome}
              onChange={handleChange}
              error={!!errors.nome}
              helperText={errors.nome}
            />
            <TextField
              required
              className="my-2"
              id="email"
              label="E-mail"
              variant="outlined"
              placeholder="Digite seu e-mail..."
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
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
                  className="my-2"
                  id="telefone"
                  label="Telefone"
                  variant="outlined"
                  placeholder="Digite seu telefone..."
                  type="tel"
                  error={!!errors.telefone}
                  helperText={errors.telefone}
                />
              )}
            </InputMask>
            <TextField
              id="mensagem"
              className="my-2"
              label="Mensagem"
              variant="outlined"
              placeholder="Digite sua mensagem..."
              multiline
              rows={4}
              value={formData.mensagem}
              onChange={handleChange}
              error={!!errors.mensagem}
              helperText={errors.mensagem}
            />
            <Button
              variant="contained"
              type="submit"
              className="c-talkToUs-btn"
            >
              Enviar e Baixar
            </Button>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose}>Cancelar</Button>
        </DialogActions>
      </Dialog>
    </section>
  );
}

export default Home;

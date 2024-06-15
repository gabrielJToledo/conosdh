import React, { useEffect, useState } from 'react'
import './Products.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import imgEbook from '../../assets/imgs/ebook.jpg'
import imgEDisc from '../../assets/imgs/disc.jpg'

import pdfDisc from '../../assets/pdf/ebook-cnv_conoscenza.pdf'
import pdfTeste from '../../assets/pdf/teste-perfil-disc-conocscenza.pdf'

function Products() {


  return (
    <section className="c-products">
      <div className="c-space-divider"></div>

      <div className='c-products-container'>
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
                E-book Conoscenza
              </Typography>
             
            </CardContent>
            <CardActions>
              <Button target='_blank' href={pdfDisc} size="small">Baixar</Button>
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
                Teste Perfil Comportamental DISC
              </Typography>
             
            </CardContent>
            <CardActions>
              <Button target='_blank' href={pdfTeste} size="small">Baixar</Button>
            </CardActions>
          </Card>

        </div>
      </div>
    </section>
  )
}

export default Products
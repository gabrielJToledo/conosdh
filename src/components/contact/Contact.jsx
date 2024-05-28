import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { phone } from '../../global'

function Contact() {
  return (
    <section className="c-contact">
      <div className="c-contact__container">
        <h2 className="c-contact__h2">Contato</h2>
        <div className="c-contact__contactContent">
          <form className='c-contact__form' action="">

            <label className='c-contact__label' htmlFor="">Nome: *</label>
            <input className='c-contact__input' type="text" placeholder='Digite seu nome...' />

            <label className='c-contact__label' htmlFor="">E-mail: *</label>
            <input className='c-contact__input' type="text" placeholder='Digite seu e-mail...' />

            <label className='c-contact__label' htmlFor="">Telefone: *</label>
            <input className='c-contact__input' type="tel" placeholder='Digite seu telefone...' />

            <label className='c-contact__label' htmlFor="">Mensagem: </label>
            <textarea className='c-contact__textArea c-contact__label' type="text" placeholder='Digite seu nome...' />

            <button>Enviar!</button>
          </form>
          <div className="c-contact__addressMap">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
            {/* <span className="c-contact__address">
              {address[0].street}, {address[0].num} - {address[0].district}
            </span> */}
            <span className="c-contact__links">
              {phone.map((phone, index) => {
                return <a className='c-contact__link' href="" key={index}><FontAwesomeIcon icon="fa-phone" /> {phone.ddd} {phone.num}</a>
              })}
            </span>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58517.90959742255!2d-46.690516993544094!3d-23.55517467724146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5825daacb07f%3A0xcfdec9e87c999ece!2sMuseu%20do%20Futebol!5e0!3m2!1spt-BR!2sbr!4v1655753667221!5m2!1spt-BR!2sbr" width="400" height="300" style={{border: 0}} loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
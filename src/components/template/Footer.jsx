import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import { logoFooter } from '../../global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { menu, phone, eMail } from '../../global'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <section className="c-footer__linksContainer">

          <div className="c-footer__siteResume">
            <img className='c-footer__logo' src={logoFooter} alt="" />
            <p className='c-footer__footerDescription'>A Conoscenza agradece sua visita. Para informações adicionais sobre nossos serviços e soluções, convidamos você a entrar em contato conosco.</p>
          </div>
          {/* <div className="c-footer__address">
            <span className='c-footer__addressSpan'><FontAwesomeIcon icon="fa-location-dot" /> {address[0].street}, {address[0].num} - {address[0].district}</span>
          </div> */}
          <div className="c-footer__links">
            {menu.map((menu, index) => {
              return <Link key={index} className='c-footer__link' to="/">
                {menu.menuName}
              </Link>
            })}
          </div>
          <div className="c-footer__phoneEmail">
            {eMail.map((mail, index) => {
              return <span key={index} className='c-footer__phoneEmail__span'> <EmailIcon/> {mail.email} </span>
            })}
            {phone.map((phone, index) => {
              return <span className='c-footer__phoneEmail__span' key={index}>
               <LocalPhoneIcon></LocalPhoneIcon> {phone.ddd} {phone.num}
              </span>
            })}
          </div>
        </section>

        <hr />

        <section className="c-footer__footerContent">
          <div className="c-footer__socialLinks">
            <p>Desenvolvido por Profuse Fruits</p>
          </div>
        </section>
      </div>
    </footer>
  )
}

export default Footer
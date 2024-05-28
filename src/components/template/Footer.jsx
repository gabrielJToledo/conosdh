import React from 'react'
import './Footer.css'
import { Link, animateScroll as scroll } from 'react-scroll';

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
          <div className="c-footer__links">
            {menu.map((menu, index) => {
              return <Link
                activeClass="active"
                to={menu.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index} className='c-footer__link'>
                {menu.menuName}
              </Link>
            })}
          </div>
          <div className="c-footer__phoneEmail">
            {eMail.map((mail, index) => {
              return <a  href='mailto:contato@conoscenzadh.com' title='e-mail' key={index} className='c-footer__phoneEmail__span'> <EmailIcon className='emailIcon' /> {mail.email} </a>
            })}
            {phone.map((phone, index) => {
              return <a  href='tel:+5512996123692' title='Telefone' className='c-footer__phoneEmail__span' key={index}>
                <LocalPhoneIcon></LocalPhoneIcon> {phone.ddd} {phone.num}
              </a>
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
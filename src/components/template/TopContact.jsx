import React from 'react'
import './TopContact.css'
import { phone, whatsapp } from '../../global.js'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons'

function TopContact() {
  return (
    <div className="topContact">
      <div className="c-topContact__contactContainer">
        {/* <div className="c-topContact__topaddress">
          <span className='c-topContact__address'><FontAwesomeIcon className='c-topContact__icon' icon={faLocationDot} /> Rua {address[0].street}, {address[0].num} - {address[0].district}</span>
        </div> */}

        <div className="c-topContact__topPhones">
          {whatsapp.map((whatsapp, index) => {
            return <a className='c-topContact__link' href="" key={index}><FontAwesomeIcon icon={faMobileScreenButton} /> {whatsapp.ddd} {whatsapp.num} </a>
          })}

          {phone.map((phone, index) => {
            return <a className='c-topContact__link' href="" key={index}><FontAwesomeIcon icon={faPhone} /> {phone.ddd} {phone.num}</a>
          })}
        </div>

        <div className="c-topContact__links-mobile">
          <a className='c-topContact_links' href=""><FontAwesomeIcon className='c-topContact__iconLink-mobile' icon={faLocationDot} /></a>
          <a className='c-topContact_links' href=""><FontAwesomeIcon className='c-topContact__iconLink-mobile' icon={faLocationDot} /></a>
        </div>
      </div>
    </div>
  )
}

export default TopContact
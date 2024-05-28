import React from 'react'

import { ourPagesContent } from './cardPageContent.js'
import './OurPagesCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)


function OurPagesCard() {
    return (
        <div className='c-ourPagesCardContainer'>
            {ourPagesContent.map((page, index) => {
                return <div className="c-ourPagesCard" key={index} >
                    <div className="backgroundImage" style={{ backgroundImage: `url("${page.urlImage}")` }}></div>
                    <FontAwesomeIcon className='c-ourPagesCard__icon' icon={page.icon} />
                    <h2 className='c-ourPagesCard__h2'>{page.mainText}</h2>
                    <div className="c-ourPagesCard__descriptionContainer">
                        <p className='c-ourPagesCard__p'>{page.description}</p>
                    </div>
                    <a className='c-ourPagesCard__aBtn' href="">SAIBA +</a>
                </div>
            })}
        </div>

    )
}

export default OurPagesCard
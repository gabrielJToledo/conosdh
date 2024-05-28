import React from 'react'
import './ProductCard.css'

import { productCardContent } from './productCardContent'

function productCard() {
  return (
    <section className="c-productCardContainer">
        {productCardContent.map((product, index) => {
            return <div key={index} className="c-productCardContainer__productCard">
                <img className='c-productCardContainer__image' src={product.urlImage} alt="" />
                <h2>{product.title}</h2>
            </div>
        })}
    </section>
  )
}

export default productCard
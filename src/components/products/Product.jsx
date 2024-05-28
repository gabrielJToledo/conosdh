import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Product.css'
import axios from 'axios'
const teste = require('../../assets/slider/banner1.jpg')

function Product() {
  const [product, setProduct] = useState()

  const { id } = useParams()

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(`http://localhost:4002/products/${id}`).catch(err => console.log(err))
      setProduct(data[0])
    }
    fetchProducts()
  }, [])

  console.log(product)

  return (
    <section className="c-product">
      {product !== undefined &&
        <div className="c-product__container">
          <section className="c-mainProductContainer">
            <h1>{product.name}</h1>
            <img src={teste} alt="Imagem do produto" className="c-mainProductContainer__image" />
            <p className="c-mainProductContainer__basicF">{product.features}</p>
            <p className="c-mainProductContainer__detailedFeatures">{product.descriptions}</p>
          </section>

          <section className="c-productMenu">

          </section>
        </div>
      }
    </section>
  )
}

export default Product
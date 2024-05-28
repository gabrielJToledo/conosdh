import React, { useEffect, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const banner = require('../../assets/slider/banner1.jpg')

function Products() {

  const [products, setProducts] = useState()

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('http://localhost:4002/products').catch(err => console.log(err))
      setProducts(data)
    }
    fetchProducts()
  }, [])

  console.log(products)

  return (
    <section className="c-products">
      <div className="c-products__mainTxtContainer"><h2>Nossos Produtos</h2></div>
      <div className="c-products__container">
        <div className="c-products__container-center">
          {products !== undefined &&
            products.map((product) => {
              return <Link key={product.id} className="c-products__link" to={`/produtos/${product.id}`}>
                <div className="c-products__cardContainer">
                  <img className='c-products__image' src={banner} alt="" />
                  <div className="c-products__description">
                    <div className="c-products__descContainer">
                      <div className="c-products__mainTxtDesc">
                        <h2 className='c-products__h2'>{product.name}</h2>
                        <h4 className='c-products__h4'>{product.descriptions}</h4>
                      </div>
                      <div className="c-products__btn">
                        <FontAwesomeIcon className='c-products__icon' icon="fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            })}
        </div>
      </div>
    </section>
  )
}

export default Products
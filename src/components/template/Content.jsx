import React from 'react'
import './Content.css'
import { Routes, Route } from 'react-router-dom'

import Home from '../home/Home'
import Contact from '../contact/Contact'
import Products from '../products/Products'
import Product from '../products/Product'

function Content() {
  return (
    <main className="content">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/contato" element={<Contact/>}></Route>
        <Route path="/produtos" element={<Products/>}></Route>
        <Route path="produtos/:id" element={<Product/>}></Route>
      </Routes>
    </main>
  )
}

export default Content
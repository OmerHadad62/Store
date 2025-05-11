import { useState } from 'react'

import './App.css'
import Products from './components/products.jsx'
import ProductById from './components/productById.jsx'
import AddProduct from './components/addProduct.jsx'
import deleteProduct from './components/deleteProduct.jsx'

function App() {
  return (
    <div>
      <AddProduct/>
      <deleteProduct/>
      <Products/>
      </div>  
  )
}

export default App

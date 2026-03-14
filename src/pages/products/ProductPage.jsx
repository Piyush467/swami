import React from 'react'
import ProductHero from './ProductHero'
import Author from "../../components/Author";


const ProductPage = () => {
  return (
      <main className="bg-[#FFFCDD] min-h-screen pt-24">
           <ProductHero/>
           <Author/>
          
         </main>
  )
}

export default ProductPage
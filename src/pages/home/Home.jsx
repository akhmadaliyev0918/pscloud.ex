import React, {useState} from 'react'
import DomainBlocks from '../../components/domainBlocks/DomainBlocks'
import ProductCategory from '../../components/productcategory/ProductCategory'

const Home = ({language}) => {
  return (
    <div>
      <DomainBlocks language={language}/>
      <ProductCategory language={language}/>
    </div>
  )
}

export default Home
import React from 'react';
import '../styles/ProductList.scss';
import { ProductCard } from './ProductCard.jsx';

import { useGetProducts } from '../hooks/useGetProducts';

const ProductList = ( { source } ) => {

  const products = useGetProducts(source)

  return (
    <section className="cards-container">
      {products.map(product => 
        <ProductCard product={product} key={product.id}/>
        )}
    </section>
  )
};

export { ProductList }

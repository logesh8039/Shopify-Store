import React from 'react';
import './Content.css'
import product from '../../productList';
import ProductItem from '../ProductItem/ProductItem';

const Content = () => {


  return (
    <div className='content' id='product'>
      <h2>Explore The Best Products</h2>
      <div className="products">
        {product.map((item,index) => {
          return <ProductItem key={index} id={item.id} title={item.title} img={item.image} rating={item.rating} price={item.price} discount={item.discount}/>
        })}
      </div>
    </div>
  )
}

export default Content;
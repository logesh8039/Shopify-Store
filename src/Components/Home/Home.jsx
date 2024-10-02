import React from 'react';
import './Home.css'
import Content from '../Content/Content';

const Home = () => {
  return (
    <>
      <div className='home'>
        <div className="background-image"></div>
        <div className="home-content">
          <h2>Explore the Best of Online Shopping</h2>
          <p>Welcome to <em>Shopify</em>, where convenience meets variety. Dive into our expansive selection of products across categories like electronics, fashion, home goods, and more</p>
          <h4>Discover why millions trust us for their shopping needs.</h4>
          <button><a href="#product">Shop Now</a></button>
        </div>
      </div>
      <Content/>
    </>
  )
}

export default Home;
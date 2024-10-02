import React from 'react';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CartList from './Components/CartList/CartList';
import FavList from './Components/FavList/FavList';
import Content from './Components/Content/Content';
import StoreContext from './StoreContext';

const App = () => {
  return (
    <StoreContext>
        <div className='app'>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Content />} />
            <Route path='/cart' element={<CartList />} />
            <Route path='/fav' element={<FavList />} />
          </Routes>
        </div>
    </StoreContext>
  );
}

export default App;

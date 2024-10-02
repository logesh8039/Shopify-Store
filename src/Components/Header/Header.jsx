import React, { useState, useContext, useEffect } from 'react';
import './Header.css';
import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { CartContext } from '../../StoreContext';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const { cart, fav } = useContext(CartContext);
  const [navItem, setNavItem] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
      setNavItem(navItem);
  }, []);

  const handleLinkClick = (item) => {
    setNavItem(item);
    setIsMenuOpen(false);
  };

  return (
    <div className={`header ${isMenuOpen ? 'open' : 'close'}`}>
      <a className="logo" href='/'>Shopi<span>Fy</span></a>
      <div className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
        {isMenuOpen ? <IoClose className='menu-bar' /> : <FiMenu className='menu-bar' />}
      </div>
      <ul className={`navbar ${isMenuOpen ? 'open' : 'close'}`}>
        <li>
          <Link 
            to='/' 
            onClick={() => handleLinkClick('home')} 
            className={navItem === 'home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link 
            to='/product' 
            onClick={() => handleLinkClick('product')} 
            className={navItem === 'product' ? 'active' : ''}
          >
            Products
          </Link>
        </li>
        <li>
          <Link 
            to='/cart' 
            onClick={() => handleLinkClick('cart')} 
            className={navItem === 'cart' ? 'active' : ''}
          >
            Carts
          </Link>
        </li>
        <li>
          <Link 
            to='/fav' 
            onClick={() => handleLinkClick('fav')} 
            className={navItem === 'fav' ? 'active' : ''}
          >
            Favorites
          </Link>
        </li>
      </ul>
      <div className="cart-list">
        <Link to='/cart' className="cart-item item">
          <BsCart2 className='cart' />
          <span className="cart-count count">{cart.length}</span>
        </Link>
        <Link to='/fav' className="fav-item item">
          <IoMdHeartEmpty className='fav' />
          <span className="fav-count count">{fav.length}</span>
        </Link>
      </div>
      <div className="login">
        <button>Login</button>
      </div>
    </div>
  );
}

export default Header;

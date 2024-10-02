import React, { createContext, useState, useEffect, useMemo } from 'react';
import products from '../src/productList.json';

export const CartContext = createContext(null);

const StoreContext = ({ children }) => {
    const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
    const [fav, setFav] = useState(() => JSON.parse(localStorage.getItem('fav')) || []);

    const [productsState, setProducts] = useState(products);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('fav', JSON.stringify(fav));
    }, [fav]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            if (prevCart.find((item) => item.id === product.id)) return prevCart;
            return [...prevCart, product];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const addToFav = (product) => {
        setFav((prevFav) => {
            if (prevFav.find((item) => item.id === product.id)) return prevFav;
            return [...prevFav, product];
        });
    };

    const removeFromFav = (productId) => {
        setFav((prevFav) => prevFav.filter((item) => item.id !== productId));
    };

    const getTotalCartAmount = () => {
        return cart.reduce((total, product) => {
            const itemInfo = productsState.find((item) => item.id === product.id);
            return itemInfo ? total + itemInfo.price : total;
        }, 0);
    };

    const value = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        fav,
        addToFav,
        removeFromFav,
        getTotalCartAmount,
        products: productsState, // Use the local products
    }), [cart, fav, productsState]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default StoreContext;

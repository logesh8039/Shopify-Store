import React, { createContext, useState, useEffect, useMemo } from 'react';

export const cartContext = createContext(null);

const StoreContext = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [fav, setFav] = useState(() => {
        const savedFav = localStorage.getItem('fav');
        return savedFav ? JSON.parse(savedFav) : [];
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

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
            const itemInfo = products.find((item) => item.id === product.id);
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
        products,
    }), [cart, fav, products]);

    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    );
};

export default StoreContext;

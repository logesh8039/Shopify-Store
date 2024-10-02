import React, { useContext, useEffect, useState } from 'react';
import './ProductItem.css'
import { FaCartShopping } from 'react-icons/fa6';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';
import { cartContext } from '../../StoreContext';

const ProductItem = ({ id, title, rating, price, img, discount }) => {

    const { addToCart, removeFromCart, cart , fav,addToFav,removeFromFav } = useContext(cartContext)
    const [isInCart, setIsInCart] = useState(false);
    const [isInFav, setIsInFav] = useState(false);

    useEffect(() => {
        setIsInCart(cart.some(item => item.id === id));
        setIsInFav(fav.some(item => item.id === id));
    }, [cart, id, fav]);


    const handleFavToogle = ()=>{
        if(isInFav){
            removeFromFav(id);
        }
        else{
            const product = {id,title,rating,price,img,discount}
            addToFav(product)
        }
        setIsInFav(!isInFav)
    }
    

    const handleCartToggle = () => {
        if (isInCart) {
            removeFromCart(id);
        } else {
            const product = { id, title, rating, price, img, discount };
            addToCart(product);
        }
        setIsInCart(!isInCart);
    };

    return (
        <div className='product-item'>
            <div className="discount">{discount}%</div>
            <div className="favorite" onClick={handleFavToogle}>
                {
                    isInFav ?
                    <IoMdHeart className='fav active'/>
                    :
                    <IoMdHeartEmpty className='fav'/>
                }
            </div>
            <div className="product-image">
                <img src={img} alt={title} />
            </div>
            <div className="product-info">
                <h2>{title.length > 25 ? title.substring(0, 20) + '...' : title}</h2>
                <div className='rating'>
                    <div className="star" style={{ '--starRating': `${rating.rate}` }}></div>
                    <div className="count">
                        <p>({rating.rate})</p>
                        <p>{rating.count}</p>
                    </div>
                </div>
                <div className="price">{`₹${price * 15}`}</div>
                <div className="add-to-cart-btn" onClick={handleCartToggle}>
                    {
                        isInCart ?
                            <button className='remove-cart'><MdRemoveShoppingCart /> Remove From Cart</button>
                            :
                            <button className='add-cart'><FaCartShopping /> Add To Cart</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductItem;
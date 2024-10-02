import React, { useContext } from 'react';
import './CartList.css'
import { CartContext } from '../../StoreContext';


const CartList = () => {

  const { cart, removeFromCart, getTotalCartAmount } = useContext(CartContext);

  const handleRemove = (id) => {
    removeFromCart(id)
  }

  const deliveryFees = 50 * cart.length;
  const subTotal = getTotalCartAmount() * 15;
  const totalFee = deliveryFees + subTotal;

  return (
    <div className='cart-list-item'>
      <h2>Your Cart Products Are Here</h2>
      {
        cart.length === 0 ? <h2 className='cart-empty'>There Is No Products In Your Carts!!!</h2>
          :
          <div className='cart-list-check'>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Item.No</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td><img src={item.img} alt={item.title} /></td>
                      <td>{item.title}</td>
                      <td>{item.price * 15}</td>
                      <td>{item.discount}</td>
                      <td><button className='remove-btn' onClick={() => handleRemove(item.id)}>Remove</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-total">
              <div className="check-cart-price">
                <h2>Cart Total</h2>
                <div className="sub-total check-price">
                  <p>Subtotal</p>
                  <p>₹{subTotal.toFixed(2)}</p>
                </div>
                <div className="delivery-fee check-price">
                  <p>delivery Fee</p>
                  <p>₹{deliveryFees}</p>
                </div>
                <div className="total-fee check-price">
                  <p>Total Fee</p>
                  <p>₹{totalFee.toFixed(2)}</p>
                </div>
                <button className='check-out-btn'>Proceed to checkout</button>
              </div>
              <div className="cart-promo">
                <p>If You have a Promocode, Enter it here!</p>
                <div className="promo-code">
                  <input type="text" placeholder='Promo Code' />
                  <input type="button" value="Submit" className='promo-btn' />
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  )
}

export default CartList;
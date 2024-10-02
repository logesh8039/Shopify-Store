import React from 'react';
import './FavList.css';
import { useContext } from 'react';
import { cartContext } from '../../StoreContext';

const FavList = () => {
  const { fav, removeFromFav } = useContext(cartContext);

  const handleRemove = (id) => {
    removeFromFav(id)
  }

  return (
    <div className='cart-list-item'>
      <h2>Your Favorite Products Are Here</h2>
      {
        fav.length === 0 ? <h2 className='fav-empty'>There Is No Products In Your Carts!!!</h2>
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
                  {fav.map((item, index) => (
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
          </div>
      }
    </div>
  )
}

export default FavList
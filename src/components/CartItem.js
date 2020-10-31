import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CartItem = ({ id, name, price, stock, count, url, removeFromCart }) => {
  return (
    <div className="cartItem">
      <img className="cartImg" alt={name} src={url}></img>
      <h4>{name}</h4>
      <p>3</p>
      <p>{price * count}$</p>
      <button onClick={() => removeFromCart(id)}>
        <FaTimes />
      </button>
    </div>
  );
};

export default CartItem;

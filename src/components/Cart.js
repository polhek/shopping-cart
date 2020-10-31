import React from 'react';

import CartItem from './CartItem';

const Cart = ({ cart, totalCost, removeFromCart, checkout }) => {
  return (
    <div className="dropdown">
      <div>
        {cart.map((item) => (
          <CartItem
            removeFromCart={removeFromCart}
            key={item.name}
            id={item.id}
            name={item.name}
            price={item.price}
            stock={item.stock}
            count={item.count}
            url={item.url}
          />
        ))}
      </div>

      <div className="totalCost">
        <button onClick={() => checkout()}>
          <h4>Checkout and pay</h4>
        </button>
        <h3>Total cost: {totalCost} $</h3>
      </div>
    </div>
  );
};

export default Cart;

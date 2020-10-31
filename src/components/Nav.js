import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from './Cart';

const Nav = ({ stockCount, cart, totalCost, removeFromCart, checkout }) => {
  const [open, setOpen] = useState(false);

  const linkStyle = {
    color: 'white',
    listStyle: 'none',
    marginRight: '35px',
    cursor: 'pointer',
    textDecoration: 'none',
  };
  return (
    <nav>
      <h1 className="brand-logo">Shopping cart</h1>
      <ul className="nav-links">
        <Link style={linkStyle} to="/">
          <li>Home</li>
        </Link>
        <Link style={linkStyle} to="/about">
          <li>About</li>
        </Link>

        <Link style={linkStyle} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
      <div className="cart-right">
        <button className="cartButton" onClick={() => setOpen(!open)}>
          <h3>
            <FaShoppingCart className="cart" />
            <span className="checkout">{stockCount}</span>
          </h3>
        </button>
        {open && (
          <Cart
            checkout={checkout}
            key="1"
            cart={cart}
            totalCost={totalCost}
            removeFromCart={removeFromCart}
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;

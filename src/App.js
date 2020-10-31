import React, { useState, useEffect } from 'react';
import './App.css';
import './SVG.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import stock from './components/Stock';

function App() {
  // states
  const [stockItems, setStockItems] = useState(stock);
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [stockCount, setStockCount] = useState(0);

  useEffect(() => {
    countCart(cart);
    calculateCost();
  }, [cart, stockItems]);

  const addCart = (cartItem) => {
    let fakeCart = cart;
    const index = fakeCart.findIndex((item) => item.name === cartItem.name);
    if (index > -1) {
      fakeCart[index].count += cartItem.count;
    } else {
      fakeCart = [...fakeCart, cartItem];
    }
    setCart(fakeCart);
  };

  const calculateCost = () => {
    const cost = cart.reduce((total, cur) => total + cur.count * cur.price, 0);
    setTotalCost(cost);
  };

  // how many items in cart
  const countCart = (cartArray) => {
    const number = cartArray.reduce(
      (totalCount, numberItems) => totalCount + numberItems.count,
      0
    );
    setStockCount(number);
  };
  const addItemCart = (item) => {
    let changeArray = [...stockItems];
    const index = changeArray.findIndex((i) => i.id === item.id);
    changeArray[index] = {
      ...changeArray[index],
      stock: item.stock - item.count,
    };
    addCart(item);
    setStockItems(changeArray);
  };

  const removeFromCart = (id) => {
    const index = stockItems.findIndex((item) => item.id === id);
    const indexCart = cart.findIndex((item) => item.id === id);
    const stock = stockItems[index];
    stock.stock = cart[indexCart].count + stock.stock;
    console.log(stock);
    const changeArray = cart.filter((item) => item.id !== id);
    setCart(changeArray);
  };

  const checkout = () => {
    if (cart.length > 0) {
      setTotalCost(0);
      setCart([]);
      alert('You bought items');
    }
  };

  return (
    <Router>
      <div class="container SVG">
        <Nav
          stockCount={stockCount}
          cart={cart}
          totalCost={totalCost}
          removeFromCart={removeFromCart}
          checkout={checkout}
        />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop stock={stockItems} addItemCart={addItemCart} />
          </Route>
          <Route exact path="">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

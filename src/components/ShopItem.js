import React, { useState } from 'react';

const ShopItem = ({ id, name, price, stock, count, url, addItemCart }) => {
  const [countItems, setCountItems] = useState(count);

  const incrementItem = () => {
    if (countItems < stock) {
      setCountItems((prevCount) => prevCount + 1);
    }
  };

  const reductionItem = () => {
    if (countItems > 0) {
      setCountItems((prevCount) => prevCount - 1);
    }
  };

  const addCartClickHandler = (id, name, price, stock, count, url) => {
    let item = {
      id: id,
      name: name,
      price: price,
      stock: stock,
      count: countItems,
      url: url,
    };
    addItemCart(item);
    setCountItems(0);
  };
  return (
    <div className="shopItem">
      <img src={url} alt={name}></img>
      <div className="itemInfo">
        <h2 className="shopText">{name}</h2>
        <h2 className="shopText">{price}$</h2>
      </div>
      <div className="stock">
        <h3 className="shopText">In Stock: {stock}</h3>
      </div>
      <div className="addItems">
        <button
          onClick={() => {
            reductionItem();
          }}
        >
          -
        </button>
        <h4>{countItems}</h4>
        <button
          onClick={() => {
            incrementItem();
          }}
        >
          +
        </button>
      </div>
      <div className="addToCart">
        <button
          onClick={() =>
            addCartClickHandler(id, name, price, stock, countItems, url)
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ShopItem;

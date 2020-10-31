import React from 'react';
import ShopItem from './ShopItem';

const Shop = ({ stock, addItemCart }) => {
  return (
    <div className="shop">
      <div>
        <h1>Shop your items</h1>
      </div>
      <div className="shopItemContainer">
        {stock.map((item) => (
          <ShopItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            stock={item.stock}
            count={item.count}
            url={item.logoURL}
            addItemCart={addItemCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;

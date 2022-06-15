import React, { useState } from "react";
import Item from "./Item";
import Header from "./Header/Header";
import Busket from "./Busket";
const ItemsList = () => {
  const [products, setProducts] = useState([
    {
      name: "Cheese",
      description: "200g cheese block",
      price: 3,
      key: "efefefefexe",
    },
    {
      name: "Milk",
      description: "1L of fresh Milk!",
      price: 2,
      key: "efefevrtgtxe",
    },
    {
      name: "Carrot",
      description: "1kg fresh carrot",
      price: 1,
      key: "efefef8767xe",
    },
    {
      name: "Tomato",
      description: "1kg fresh tomato",
      price: 2,
      key: "efefe345efexe",
    },
    {
      name: "Broccoli",
      description: "1kg fresh broccoli",
      price: 2,
      key: "efe7867exe",
    },
    {
      name: "Onion",
      description: "1kg fresh onion",
      price: 1,
      key: "efe534fexe",
    },
    {
      name: "Cabbage",
      description: "1kg fresh cabbage",
      price: 3,
      key: "efefef3463exe",
    },
    {
      name: "Butter",
      description: "150g butter block",
      price: 2,
      key: "efefef43534",
    },
  ]);
  const [busket, setBusket] = useState();

  const productsArr = (arr) => {
    var result = arr.reduce(function (acc, el) {
      acc[el] = (acc[el] || 0) + 1;
      return acc;
    }, {});
    setBusket(result);
  };

  const [sum, setSum] = useState(0);
  return (
    <div>
      <Header />
      <Busket products={products} busket={busket} sum={sum} />
      <div className="itemsList">
        {products.map((item) => (
          <Item
            productsArr={productsArr}
            sum={setSum}
            img={item.img}
            name={item.name}
            description={item.description}
            key={item.key}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemsList;

import React, { useState, useEffect } from "react";
import Cheese from "./imgs/Cheese.png";
import Milk from "./imgs/Milk.png";
import Tomato from "./imgs/Tomato.png";
import Carrot from "./imgs/Carrot.png";
import Onion from "./imgs/Onion.png";
import Cabbage from "./imgs/Cabbage.png";
import Broccoli from "./imgs/Broccoli.png";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
let sum = 0;
let prod = [];
const Item = (props) => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
    sum++;
    props.sum(sum);
    // ----------------
    prod.push(props.name);
    props.productsArr(prod);
  };

  const delCount = () => {
    if (count <= 0) {
    } else {
      setCount(count - 1);
      sum--;
      props.sum(sum);
      // ------------------
      let myIndex = prod.indexOf(props.name);
      if (myIndex !== -1) {
        prod.splice(myIndex, 1);
      }
      props.productsArr(prod, props.name);
    }
  };

  return (
    <div className="item">
      <div>
        <img
          className="productImg"
          src={require("./imgs/" + props.name + ".png")}
        />
      </div>
      <div>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="plusMinusDiv">
        <p className="minusP" onClick={delCount}>
          <AiOutlineMinus />
        </p>
        <p>{count}</p>
        <p className="plusP" onClick={addCount}>
          <AiOutlinePlus />
        </p>
      </div>
    </div>
  );
};

export default Item;

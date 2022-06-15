import React from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
const Busket = (props) => {
  const closeNav = () => {
    document.getElementsByClassName("sidenav")[0].style.width = "0";
  };
  const openNav = () => {
    document.getElementsByClassName("sidenav")[0].style.width = "250px";
  };
  const pressBuy = () => {
    window.location.reload();
  };

  let total = 0;
  let arr = [];
  for (let key in props.busket)
    arr.push(
      <div key={key}>
        <h2 className="busketProducts">
          {key}: {props.busket[key]} -{" "}
          {props.products.map((i) => {
            if (i.name == key) {
              total += i.price * props.busket[key];
              return i.price * props.busket[key];
            }
          })}
          $
        </h2>
      </div>
    );

  return (
    <div>
      <div className="sidenav">
        <h1 className="busketH1">Your Busket</h1>
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        {arr}
        <h1 className="busketH1Total">Total Price: {total}$</h1>
        <button onClick={pressBuy} className="busketBuyBtn">
          Buy
        </button>
      </div>
      <div className="busketPage" onClick={openNav}>
        <BsFillBasket2Fill className="busket" />
        <span className="busketP">{props.sum}</span>
      </div>
    </div>
  );
};

export default Busket;

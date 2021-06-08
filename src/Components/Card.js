import React from "react";

function Card(props) {
console.log(props.src)
  return (
    <div className="card">
      <div className="containPlay">
        <img src={props.src} alt={`${props.name} album cover`} />
        <div className="play" onClick={props.onClick}>
          <div className="circle">
            <div className="playIcon"></div>
          </div>
        </div>
      </div>
      <div className="cardInfo">
        <div className="titleContain">
          <h2 className="cardTitle">{props.name}</h2>
          <h3>{props.price}€</h3>
          <h3>{`by ${props.artist}`}</h3>
        </div>
      </div>
      <button onClick={props.addToCart}>Add to cart</button>
    </div>
  );
}

export default Card;

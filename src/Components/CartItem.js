import React from "react";

function CartItem(props) {

  return (
    <div>
      <div className="cartItem">
        <img src={props.album.cover} alt={`${props.album.album} album cover`} />
        <div className="cartInfo">
          <h3 className="cartTitle">{props.album.album}</h3>
          <h3> {props.album.price}€ </h3>
          <form className="howMany">
            <label>Units:</label>
            <input value={props.value} onChange={ props.onChange }/>
            <div className="arrowWrap">
              <div className="arrows up" onClick={props.increment}></div>
              <div className="arrows down" onClick={props.decrement}></div>
            </div>
            <button type='button' onClick={props.cancel}>Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

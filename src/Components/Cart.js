import React from "react";
import CartItem from "./CartItem";
function Cart(props) {
  const quantitySet = (id) => {
    const album= props.cart.filter((item) => item.id === id);
    return album[0].quantity
  };
  const sumQuantity = () => {
    const totalPerAlbum = props.cart.map( item => {
        item.total = item.price*item.quantity
        return item
    })
    const sum = totalPerAlbum.reduce( (a, b) => a+b.total, 0)
    return Math.round(sum * 100) / 100
  }
  return (
    <div className="cart">
      <h2>My Cart</h2>
      {props.cart.length === 0 ? (
        <h3 className="cartEmpty">Your cart is empty.</h3>
      ) : (
        <div>
          <div>
            {props.cart.map((album) => {
              return (
                <CartItem
                  album={album}
                  value={quantitySet(album.id)}
                  onChange={(e) => props.onChange(e, album.id)}
                  increment={() => props.increment(album.id)}
                  decrement={() => props.decrement(album.id)}
                  cancel={() => props.cancel(album.id)}
                />
              );
            })}
            <div className="line"> </div>
            <h4> TOTAL: <i>{sumQuantity()}€</i></h4>
            <div className="buyBtn">
              <button>Buy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

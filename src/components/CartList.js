import React from "react";

//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";
import { checkout } from "../redux/actions/cartActions";

const CartList = props => {
  const cart = props.cartItems.map((item, idx) =>
    <CartItem item={item} key={idx} />
  );
  return (
    <div>
      {cart}

      <button onClick={() => props.checkout(props.cartItems)}>checkout</button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items
});

const mapDispatchToProps = dispatch => ({
  checkout: cartCryptosItem => dispatch(checkout(cartCryptosItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

import React from "react";

import { Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";
import { checkout } from "../redux/actions/cartActions";

const CartList = props => {
  if (!props.user) return <Redirect to="/" />;
  const cart = props.cartItems.map((item, idx) =>
    <CartItem item={item} key={idx} />
  );
  return (
    <div>
      {cart}

      <button onClick={() => props.checkout(props.cartItems, props.history)}>
        checkout
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items,
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => ({
  checkout: (cartCryptosItem, history) =>
    dispatch(checkout(cartCryptosItem, history))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartList);

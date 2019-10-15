import React from "react";

//redux
import { connect } from "react-redux";

//component
import CartItem from "./CartItem";

const CartList = props => {
  const cart = props.cartItems.map(item => (
    <CartItem item={item} key={item.id} />
  ));
  return <div>{cart}</div>;
};

const mapStateToProps = state => ({
  cartItems: state.cartReducer.items
});

export default connect(mapStateToProps)(CartList);

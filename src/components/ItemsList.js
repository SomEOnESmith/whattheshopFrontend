import React from "react";

import { connect } from "react-redux";

import ItemCard from "./ItemCard";
import CartItem from "./CartItem";

const ItemsList = props => {
  const cryptosItem = props.cryptos.map(cryptoItem => (
    <ItemCard cryptoItem={cryptoItem} key={cryptoItem.id} />
  ));
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>name</th>
            <th>price</th>
            <th>change</th>
            <th> buy</th>
          </tr>
        </thead>
        {cryptosItem}
      </table>
      <CartItem />
    </div>
  );
};

const mapStateToProps = state => ({
  cryptos: state.cryptosReducer.cryptos
});

export default connect(mapStateToProps)(ItemsList);

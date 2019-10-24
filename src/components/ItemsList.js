import React from "react";

import { connect } from "react-redux";

import ItemCard from "./ItemCard";

const ItemsList = props => {
  const cryptosItem = props.cryptos.map(cryptoItem => (
    <ItemCard cryptoItem={cryptoItem} key={cryptoItem.id} />
  ));
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>price</th>
          <th>change last 24H</th>
          <th> buy</th>
        </tr>
      </thead>
      {cryptosItem}
    </table>
  );
};

const mapStateToProps = state => ({
  cryptos: state.cryptosReducer.cryptos
});

export default connect(mapStateToProps)(ItemsList);

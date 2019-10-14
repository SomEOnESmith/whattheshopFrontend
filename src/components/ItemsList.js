import React from "react";
import ItemCard from "./ItemCard";
import CartItem from "./CartItem";

const ItemsList = () => {
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
        <ItemCard />
      </table>
      <CartItem />
    </div>
  );
};

export default ItemsList;

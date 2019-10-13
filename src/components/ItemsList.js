import React from "react";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  return (
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
  );
};

export default ItemsList;

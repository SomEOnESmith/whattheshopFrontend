import React from "react";

const ItemCard = () => {
  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Bitcoin</td>
        <td>12,532.43 KWD</td>
        <td>-0.10%</td>
        <td>
          <button className="btn btn-success">Buy</button>
        </td>
      </tr>

      <tr>
        <th scope="row">2</th>
        <td>Litecoin</td>
        <td>17.043 KWD</td>
        <td>+0.32%</td>
        <td>
          <button className="btn btn-success">Buy</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemCard;

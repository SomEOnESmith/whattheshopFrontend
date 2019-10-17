import React, { useState } from "react";

//component
import AddItemForm from "./AddItemForm";
import Modal from "react-responsive-modal";

const ItemCard = props => {
  const [open, setOpen] = useState(false);

  let color = "";
  props.cryptoItem.rate_change >= 0 ? (color = "green") : (color = "red");

  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>
          <img
            src={props.cryptoItem.image}
            className="mr-2"
            alt="..."
            width="30"
            height="30"
          />
          {props.cryptoItem.currency}
        </td>
        <td>
          {props.cryptoItem.price} KWD
        </td>
        <td style={{ color: color }}>
          {props.cryptoItem.rate_change}%
        </td>
        <td>
          <div>
            <Modal open={open} onClose={() => setOpen(false)} center>
              <AddItemForm cryptoItem={props.cryptoItem} />
            </Modal>
            <button className="btn btn-success" onClick={() => setOpen(true)}>
              buy
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default ItemCard;

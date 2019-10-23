import React, { useState } from "react";
import { connect } from "react-redux";

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
        <th scope="row">
          {props.cryptoItem.id}
        </th>
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
              <AddItemForm closeModal={setOpen} cryptoItem={props.cryptoItem} />
            </Modal>
            <button
              className="btn btn-success"
              disabled={props.user ? false : true}
              onClick={() => setOpen(true)}
            >
              buy
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  );
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(mapStateToProps)(ItemCard);

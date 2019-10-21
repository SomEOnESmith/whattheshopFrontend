import React, { useState } from "react";

//redux
import { connect } from "react-redux";

//actions
import { addToCart } from "../redux/actions/cartActions";

function AddItemForm(props) {
  const [quantity, setQuantity] = useState(0);

  const submitItem = event => {
    event.preventDefault();
    props.addToCart({ currencyID: props.cryptoItem.id, quantity: quantity });
  };

  return (
    <div className="mt-5 p-2">
      <form onSubmit={submitItem}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Quantity</span>
          </div>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={quantity}
            onChange={quant => setQuantity(quant)}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(null, mapDispatchToProps)(AddItemForm);

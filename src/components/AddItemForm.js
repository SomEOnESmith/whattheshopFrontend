// className="btn btn-success" onClick={() => props.addToCart(item)}
import React, { Component } from "react";

//redux
import { connect } from "react-redux";

//actions
import { addToCart } from "../redux/actions/cartActions";

class AddItemForm extends Component {
  state = {
    item: this.props.cryptoItem,
    quantity: 0
  };

  submitItem = event => {
    event.preventDefault();
    let item = {
      ...this.state.item,
      quantity: this.state.quantity
    };
    this.props.addToCart(item);
  };

  onTextchange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    return (
      <div className="mt-5 p-2">
        <form onSubmit={this.submitItem}>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text">Quantity</span>
            </div>
            <input
              type="text"
              className="form-control"
              name="quantity"
              onChange={this.onTextchange}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(AddItemForm);

import React, { Component } from "react";
import { connect } from "react-redux";
import Modal from "react-modal";

//FontAwesome
import {
  faWindowClose,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Modal Style from documentation
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
class ProfileRow extends Component {
  state = { modal: false };

  closeModal = () => {
    this.setState({ modal: false });
  };

  render() {
    let transaction = this.props.transaction;
    let total = 0;
    let transaction_items = transaction.transaction_items.map(
      transaction_item => {
        let crypto = this.props.cryptos.find(
          currency => currency.id === transaction_item.currency
        );
        total += crypto.price * transaction_item.quantity;
        return (
          <tr>
            <th scope="row">{transaction_item.id}</th>
            <td>{crypto.currency}</td>
            <td>{transaction_item.quantity}</td>
            <td>{crypto.price}</td>
            <td>{(crypto.price * transaction_item.quantity).toFixed(3)} KWD</td>
          </tr>
        );
      }
    );
    return (
      <>
        <tr onClick={() => this.setState({ modal: true })} scope="row">
          <th>{transaction.id}</th>
          <td>{transaction.datetime}</td>
          <td>{total.toFixed(3)}</td>
          <td>
            <FontAwesomeIcon icon={faCheckCircle} color="green" size="1x" />
          </td>
        </tr>
        <Modal
          isOpen={this.state.modal}
          onClose={this.closeModal}
          style={customStyles}
        >
          <div>
            <div className="row">
              <div className="col-12 text-right align-right">
                <FontAwesomeIcon
                  onClick={this.closeModal}
                  icon={faWindowClose}
                  color="red"
                  size="1x"
                />
              </div>
            </div>
            <table className="table w-100">
              <thead>
                <tr>
                  <th scope="col">#ID</th>
                  <th scope="col">Currency</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price Per 1</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody className="">{transaction_items}</tbody>
            </table>
          </div>
        </Modal>
      </>
    );
  }
}

const mapStateToProps = state => ({
  cryptos: state.cryptosReducer.cryptos
});
export default connect(mapStateToProps)(ProfileRow);

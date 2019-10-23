import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../redux/actions/cartActions";

const CartItem = props => {
  const { item } = props;
  console.log(item);
  const crypto = props.cryptos.find(
    cryptoItem => cryptoItem.id === item.currency
  );
  const total = item.quantity * crypto.price;
  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters justify-content-center align-items-center">
          <div className="col-md-4 text-center">
            <img
              src={crypto.image}
              width="100"
              height="100"
              alt={crypto.currency}
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                {item.currency}
              </h5>
              <p className="card-text">
                price = {crypto.price} KWD quantity = {item.quantity}
              </p>
              <p className="card-text">
                total = {total.toFixed(4)} KWD
              </p>
              <p className="card-text">
                <small className="text-muted">
                  rate = {crypto.rate_change}%
                </small>
              </p>
              <button
                className="btn btn-danger"
                onClick={() => props.removeItem(item)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  cryptos: state.cryptosReducer.cryptos
});
const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item))
});
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);

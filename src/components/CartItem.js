import React from "react";
import { connect } from "react-redux";

const CartItem = props => {
  const { item } = props;
  console.log(item);
  const crypto = props.cryptos.find(
    cryptoItem => cryptoItem.id === item.currencyID
  );
  const total = item.quantity * item.price;
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

export default connect(mapStateToProps)(CartItem);

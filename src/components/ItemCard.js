import React from "react";
import { addToCart } from "../redux/actions/cartActions";
import { connect } from "react-redux";

const ItemCard = props => {
  let change = "-3.20";
  let color = "";
  if (change >= 0) color = "green";
  else color = "red";

  const item = {
    name: "Litecoin",
    quantity: 1.5,
    price: 55.888,
    rate: -3.2
  };
  return (
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>
          <img
            src="https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png"
            className="mr-2"
            alt="..."
            width="30"
            height="30"
          />
          Bitcoin
        </td>
        <td>12,532.43 KWD</td>
        <td>-0.10%</td>
        <td>
          <button className="btn btn-success">Buy</button>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>
          <img
            src="https://dynamic-assets.coinbase.com/f018870b721574ef7f269b9fd91b36042dc05ebed4ae9dcdc340a1bae5b359e8760a8c224bc99466db704d10a3e23cf1f4cd1ff6f647340c4c9c899a9e6595cd/asset_icons/984a4fe2ba5b2c325c06e4c2f3ba3f1c1fef1f157edb3b8ebbfe234340a157a5.png"
            className="mr-2"
            alt="..."
            width="30"
            height="30"
          />
          Litecoin
        </td>
        <td>17.043 KWD</td>
        <td>+0.32%</td>
        <td>
          <button className="btn btn-success">Buy</button>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>
          <img
            src="https://dynamic-assets.coinbase.com/7796fb1bd5752a156c77e0b1fa28fb17e93d03b4b8e2dcff58dcaf8f99b2e4a3c3af2cd905d5536761c54ac273d62d91a38ef8e5702fa988c37264e7aba36b3b/asset_icons/3af4b33bde3012fd29dd1366b0ad737660f24acc91750ee30a034a0679256d0b.png"
            className="mr-2"
            alt="..."
            width="30"
            height="30"
          />
          Ethereum
        </td>
        <td>55.888 KWD</td>
        <td style={{ color: color }}>{change}%</td>
        <td>
          <button
            className="btn btn-success"
            onClick={() => props.addToCart(item)}
          >
            Buy
          </button>
        </td>
      </tr>
    </tbody>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart: item => dispatch(addToCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(ItemCard);

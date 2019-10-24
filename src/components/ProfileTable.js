import React, { Component } from "react";
import ProfileRow from "./ProfileRow";

export default class ProfileTable extends Component {
  render() {
    let transactions = this.props.transactions.map(transaction => (
      <ProfileRow transaction={transaction} />
    ));
    return (
      <table className="table w-100">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Date</th>
            <th scope="col">Total</th>
            <th scope="col">Is Paid</th>
          </tr>
        </thead>
        <tbody className="">{transactions}</tbody>
      </table>
    );
  }
}

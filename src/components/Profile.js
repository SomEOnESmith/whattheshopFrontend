import React, { Component } from "react";
import { connect } from "react-redux";

class Profile extends Component {
  render() {
    if (this.props.loading) return <div>Loading</div>;
    let profile = this.props.profile;
    console.log(profile, "profile");
    let transactions = profile.transactions.map(transaction =>
      <tr>
        <th scope="row">
          {transaction.id}
        </th>
        <td>
          {transaction.datetime}
        </td>
        <td>
          {transaction.total}
        </td>
        <td>
          {transaction.is_paid}
        </td>
      </tr>
    );
    return (
      <div className="container">
        <h1>
          {profile.user.username}'s Profile
        </h1>
        <div className="row">
          <div className="col-6">
            <h3>
              First Name: <small>{profile.user.first_name}</small>
            </h3>
            <h3>
              Last Name: <small>{profile.user.last_name}</small>
            </h3>
            <h3>
              Email <small>{profile.user.email}</small>
            </h3>
          </div>
          <div className="col-6">
            <h3>
              DOB: <small>{profile.birth_date}</small>
            </h3>
            <h3>
              Phone: <small>{profile.phone_number}</small>
            </h3>
          </div>
        </div>
        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#ID</th>
                <th scope="col">Date</th>
                <th scope="col">Total</th>
                <th scope="col">Is Paid</th>
              </tr>
            </thead>
            <tbody>
              {transactions}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: state.authReducer.profile,
  loading: state.authReducer.loading
});

const mapDispatchToProps = {};
export default connect(mapStateToProps)(Profile);

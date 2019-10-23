import React, { Component } from "react";
import { connect } from "react-redux";
import ProfileTable from "./ProfileTable";

class Profile extends Component {
  render() {
    if (this.props.loading) return <div>Loading</div>;
    let profile = this.props.profile;
    let user = this.props.user;

    return (
      <div className="container">
        <h1>
          {user.username}'s Profile
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
          <ProfileTable transactions={this.props.profile.transactions} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authReducer.user,
  profile: state.authReducer.profile,
  loading: state.authReducer.loading
});

const mapDispatchToProps = {};
export default connect(mapStateToProps)(Profile);

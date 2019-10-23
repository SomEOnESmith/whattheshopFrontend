import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signup } from "../redux/actions/authActions";
import { connect } from "react-redux";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.signup(this.state, this.props.history);
  };

  render() {
    if (this.props.user) return <Redirect to="/" />;
    const {
      username,
      password,
      first_name,
      last_name,
      email,
      phone_number
    } = this.state;

    return (
      <div className="col-6 mx-auto">
        <div className="card my-5">
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={this.state.email}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first_name"
                  value={first_name}
                  name="first_name"
                  placeholder="First Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last_name"
                  value={last_name}
                  name="last_name"
                  placeholder="Last Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone_number"
                  value={phone_number}
                  name="phone_number"
                  placeholder="Phone Number"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Signup
              </button>
              <Link to="/login" className="btn btn-link my-2 my-sm-0">
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authReducer.user
});

const mapDispatchToProps = dispatch => {
  return {
    signup: (userData, history) => dispatch(signup(userData, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);

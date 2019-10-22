import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../redux/actions/authActions";
import { connect } from "react-redux";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  render() {
    const { username, password } = this.state;
    if (this.props.user) return <Redirect to="/" />;
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

              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <Link to="/signup" className="btn btn-link my-2 my-sm-0">
                Signup for an account
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
    login: (userData, history) => dispatch(login(userData, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

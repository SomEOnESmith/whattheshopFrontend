import React from "react";
import { logout } from "./redux/actions";
import { connect } from "react-redux";

function Logout(props) {
  return (
    <button className="btn btn-danger m-2 float-left" onClick={props.logout}>
      Logout {props.user.username}
    </button>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
const mapStateToProps = state => {
  return {
    user: state.user.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

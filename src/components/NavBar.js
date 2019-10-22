import React from "react";

//redux
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

//FontAwesome
import {
  faShoppingCart,
  faSignInAlt,
  faUserPlus,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {logout} from "../redux/actions/authActions"
import { dispatch } from "rxjs/internal/observable/pairs";
const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark py-4 ">
        <NavLink className="navbar-brand" to="/item/list">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav justify-content-end">
            {props.user?
              <button className="nav-item bg-transparent" onClick={()=>props.logout()}>
              <NavLink to="/" className="nav-link iconColor ">
                <FontAwesomeIcon icon={faUser} size="1x" />
                {props.user.username}
              </NavLink>
            </button>:
            <>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link iconColor ">
                <FontAwesomeIcon icon={faSignInAlt} size="1x" />
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link iconColor ">
                <FontAwesomeIcon icon={faUserPlus} size="1x" />
                SignUp
              </NavLink>
            </li>
            </>
            }
            <li className="nav-item">
              <NavLink to="/cart/list" className="nav-link iconColor ">
                <FontAwesomeIcon icon={faShoppingCart} size="1x" />
                {props.cart.length
                  ? <span className="badge badgePlace ">
                      {props.cart.length}
                    </span>
                  : <div />}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  user:state.authReducer.user,
  cart: state.cartReducer.items
});

const mapDispatchToProps = dispatch=>({
  logout: ()=> dispatch(logout())
})
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);

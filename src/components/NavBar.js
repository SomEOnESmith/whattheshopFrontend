import React from "react";

//redux
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

//FontAwesome
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item dropdown ">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink to="/cart/list" className="nav-link iconColor ">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
                {props.cart.length ? (
                  <span className="badge badgePlace ">{props.cart.length}</span>
                ) : (
                  <div />
                )}
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => ({
  cart: state.cartReducer.items
});

export default connect(mapStateToProps)(NavBar);

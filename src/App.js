import React from "react";
import "./App.css";

//redux
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";

//component
import CartList from "./components/CartList";
import ItemsList from "./components/ItemsList";
import Signup from "./components/SignupForm";
import Login from "./components/LoginForm";
import Loading from "./components/Loading";
import Profile from "./components/Profile";

const App = props => {
  return (
    <div>
      <NavBar />
      {props.loading ? (
        <Loading />
      ) : (
        <div className="container mt-4">
          <Switch>
            {/* Clean up URLs - better naming convention */}
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/cart" component={CartList} />
            <Route path="/list" component={ItemsList} />
            <Redirect from="/" to="/list" />
          </Switch>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  loading: state.cryptosReducer.loading
});

export default connect(mapStateToProps)(App);

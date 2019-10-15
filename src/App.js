/* <Route path="/authors/:authorID" component={AuthorDetail} /> */
import React from "react";
import "./App.css";

//redux
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";

//component
import CartList from "./components/CartList";
import ItemsList from "./components/ItemsList";
import Loading from "./components/Loading";

const App = props => {
  return (
    <div>
      <NavBar />
      {props.loading ? (
        <Loading />
      ) : (
        <div className="container mt-4">
          <Switch>
            <Route path="/cart/list" component={CartList} />
            <Route path="/item/list" component={ItemsList} />
            <Redirect to="/item/list" />
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

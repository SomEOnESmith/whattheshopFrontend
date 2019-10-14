import React from "react";
import "./App.css";

import { Switch, Route, Redirect } from "react-router-dom";
import ItemsList from "./components/ItemsList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <ItemsList />
      </div>
    </div>
  );
}

export default App;

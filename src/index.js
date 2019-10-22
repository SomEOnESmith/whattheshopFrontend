import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

//css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Components
import App from "./App";

//Tools
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//Store
import store from "./redux";
import { getCryptos } from "./redux/actions/cryptosActions";
import { fetchRealTime } from "./redux/actions/realTimeActions";
import { checkForExpiredToken } from "./redux/actions/authActions";

store.dispatch(getCryptos());
store.dispatch(fetchRealTime());
store.dispatch(checkForExpiredToken());
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

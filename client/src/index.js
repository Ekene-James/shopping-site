import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware, compose, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./redux/reducers/rootReducer";
import { PersistGate } from "redux-persist/integration/react";

const middleware = [thunk];
let devTool;
if (process.env.NODE_ENV === "development") {
  devTool =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
} else {
  devTool = "";
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    devTool
  )
);

const storePersistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={storePersistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

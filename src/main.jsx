import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DatasCoffeeProvider from "./context/datasCoffeeContext.jsx";
import ImageCoffeeProvider from "./context/imageCoffeeContext.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DatasCoffeeProvider>
        <ImageCoffeeProvider>
          <App />
        </ImageCoffeeProvider>
      </DatasCoffeeProvider>
    </Provider>
  </React.StrictMode>,
);

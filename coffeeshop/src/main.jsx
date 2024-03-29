import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProductsContext } from "./context/productsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductsContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductsContext>
);

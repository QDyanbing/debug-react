import React from "react";
import ReactDOM from "react-dom/client";
import { flushSync } from "react-dom";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

flushSync(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

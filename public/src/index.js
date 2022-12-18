import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import App2 from "./App2";

ReactDOM.render(<App2 />, document.getElementById('root'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

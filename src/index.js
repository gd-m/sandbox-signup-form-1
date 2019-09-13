import React from "react";
import ReactDOM from "react-dom";
import Signup from "./Signup";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Signup />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

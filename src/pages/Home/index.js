import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "../../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Example Project
        </p>
        <Link className="App-link" to="/example">Go To Table</Link>
      </header>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Route } from "react-router-dom";
import NavBar from "./components/HomePage/NavBar";
import Login from "./components/Login/Login";

import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar>
          <Route path="/NavBar" component={NavBar} />
        </NavBar>
        <Login>
          <Route path="/login" component={Login} />
        </Login>
      </header>
    </div>
  );
}
export default App;

/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../logo.svg";

/**
 * Login functionality will be done here
 */

const Home = () => {
  const AppScaff = (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

  return (
    <div>
      <p>This is the home page</p>
    </div>
  );
};

export default Home;

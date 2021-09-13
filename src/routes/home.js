/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import React from "react";
import Card from "../components/card";
import Form from "../components/form";
import logo from "../logo.svg";

const HomeWrap = styled.div`
  /* Layout */
  display: flex;

  /* Presentation */
`;

const LoginArea = styled.div`
  /* Layout */
  height: 10rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding-right: 1rem;
  padding-left: 1rem;

  /* Presentation */
`;

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

  function NavTo(params) {}

  return (
    <HomeWrap className="home-wrapper">
      <Card width="20rem" height="20rem">
        <LoginArea>
          <h2>Company Name</h2>
          <Form />
        </LoginArea>
      </Card>
    </HomeWrap>
  );
};

export default Home;

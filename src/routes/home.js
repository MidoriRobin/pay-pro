/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import { Magic } from "magic-sdk";
import React, { useState } from "react";
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

  const [ email, setEmail ] = useState("");

  const magic = new Magic(`${process.env.REACT_APP_MAGIC_API_SK}`);
 
  function loadEmailToSubmit(email) {
    setEmail(email)
    console.log(`${email}`)
  }

  function NavTo(params) {}

  async function handleLoginWithMagic(email) {
    const didToken = await magic.auth.loginWithMagicLink({})
  }

  return (
    <HomeWrap className="home-wrapper">
      <Card width="20rem" height="20rem">
        <LoginArea>
          <h2>Company Name</h2>
          <Form passEmail={loadEmailToSubmit} />
        </LoginArea>
      </Card>
    </HomeWrap>
  );
};

export default Home;

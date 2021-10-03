/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import Card from "../components/card";
import Form from "../components/form";
import logo from "../logo.svg";
import { UserContext } from "../App";
import { magic } from "../lib/magic";

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

const Home = (props) => {
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  let history = useHistory();

  // TODO: add loading state for when context loads user
  useEffect(() => {
    if (user?.email) {
      history.push("/invoice");
    }
  }, [user]);

  function loadEmailToSubmit(email) {
    setEmail(email);
    console.log(`${email}`);
    history.push("/invoice");
  }

  function NavTo(params) {}

  /**
   * Handles magic login auth
   * @param {*} email
   */
  async function handleLoginWithMagic(email) {
    const didToken = await magic.auth.loginWithMagicLink({
      email,
      redirectURI: new URL("/invoice", window.location.origin).href,
    });

    const userEmail = { email };

    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + didToken,
      },
      body: JSON.stringify(userEmail),
    })
      .then(async (response) => {
        if (response.status === 200) {
          try {
            const userMetadata = await magic.user.getMetadata();
            await setUser(userMetadata);
            history.push("/invoice");
          } catch (error) {
            console.log(
              `An error occured trying to use magic login, Error: ${error}`,
            );
          }
        } else if (response.status === 202) {
          history.push("/pay", { data: email });
        }
      })
      .catch((error) => {
        console.log(`There was an error submitting your request: ${error}`);
        alert("There was an error submitting your request");
      });
  }

  /**
   * Checks if email exists on the backend
   * @param {*} email
   * @returns true or false
   */
  async function checkEmail(email) {
    let isPresent = false;

    const emailToCheck = { email };
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": `${process.env.REACT_APP_SERVER_URL}`,
      },
      body: JSON.stringify(emailToCheck),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          throw new Error("Issue with response");
        }

        const data = await response.json();
        console.log(`Data from check email function: ${data}`);
        isPresent = data.valid;
      })
      .catch((error) => {
        console.log(`An error occurred ${error}`);
      });

    return isPresent;
  }

  /**
   * Handles processing of login
   * @param {*} email
   */
  async function processLogin(email) {
    const checkResult = await checkEmail(email);

    console.log(checkResult);

    if (checkResult === true) {
      await handleLoginWithMagic(email);
    } else {
      history.push("/pay", { data: email });
    }
  }

  return (
    <HomeWrap className="home-wrapper">
      <Card width="20rem" height="20rem">
        <LoginArea>
          <h2>Company Name</h2>
          <Form passEmail={processLogin} />
        </LoginArea>
      </Card>
    </HomeWrap>
  );
};

Home.propTypes = {
  loadUser: PropTypes.func,
};

export default Home;

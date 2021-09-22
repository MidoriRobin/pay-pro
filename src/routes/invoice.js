/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import Card from "../components/card";
import { UserContext } from "../App";
import { magic } from "../lib/magic";
import { useHistory } from "react-router";

const Invoice = (props) => {
  let history = useHistory();
  const [user, setUser] = useContext(UserContext);

  function logout() {
    magic.user.logout().then(() => {
      setUser({ user: null });
      history.push("/");
    });
  }

  return (
    <Card>
      <p>This is the invoice route</p>
      <button onClick={logout}>Logout</button>
    </Card>
  );
};

Invoice.propTypes = {};

export default Invoice;

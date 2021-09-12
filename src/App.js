/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Magic } from "magic-sdk";
import styled from "@emotion/styled";
import Home from "./routes/home";
import Payment from "./routes/payment";
import Access from "./routes/access";
import Invoice from "./routes/invoice";
import Success from "./routes/success";
import MobileBg from "./assets/cloudy-mobile.svg";

const AppWrap = styled.div`
  /* Layout */
  display: flex;
  min-height: 100vh;

  /* Presentation */
  background-color: red;
`;

function App() {
  const UserContext = React.createContext();

  const [user, setUser] = useState({});

  const magic = new Magic(`${process.env.REACT_APP_MAGIC_API_SK}`);

  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);

  return (
    <AppWrap className="app-wrapper">
      <Router>
        <Switch>
          <UserContext.Provider value={[user, setUser]}>
            <Route path="/pay">
              <Payment />
            </Route>
            <Route path="/success">
              <Access />
            </Route>
            <Route path="/access">
              <Invoice />
            </Route>
            <Route path="/invoice">
              <Success />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </UserContext.Provider>
        </Switch>
      </Router>
    </AppWrap>
  );
}

export default App;

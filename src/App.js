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

const AppWrap = styled.main`
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  /* Presentation */
  background-image: url(${MobileBg});
  background-repeat: no-repeat;
  background-size: 100% 15rem;
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
            <Route exact path="/">
              <Payment />
            </Route>
            <Route path="/pay">
              <Home />
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
          </UserContext.Provider>
        </Switch>
      </Router>
    </AppWrap>
  );
}

export default App;

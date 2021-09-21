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
import DesktopBg from "./assets/cloudy.svg";

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

  @media (min-width: 1024px) {
    background-image: url(${DesktopBg});
    background-size: auto;
    background-position: top;
  }

  @media (min-width: 1441px) {
    background-image: url(${DesktopBg});
    background-size: cover;
    background-position: top;
  }
`;

const AppCont = styled.div`
  @media (min-width: 1024px) {
    margin: 0 auto;
  }
`;

function App() {
  const UserContext = React.createContext();

  const [user, setUser] = useState({});

  const magic = new Magic(`${process.env.REACT_APP_MAGIC_API_PK}`);

  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then((isLoggedIn) => {
      return isLoggedIn
        ? magic.user.getMetadata().then((userData) => setUser(userData))
        : setUser({ user: null });
    });
  }, []);

  function loadUser(user) {
    setUser(user);
  }

  return (
    <AppWrap className="app-wrapper">
      <AppCont className="app-container">
        <Router>
          <Switch>
            <UserContext.Provider value={[user, setUser]}>
              <Route exact path="/">
                <Home loadUser={loadUser} />
              </Route>
              <Route path="/pay">
                <Payment />
              </Route>
              <Route path="/success">
                <Success />
              </Route>
              <Route path="/access">
                <Access />
              </Route>
              <Route path="/invoice">
                <Invoice />
              </Route>
            </UserContext.Provider>
          </Switch>
        </Router>
      </AppCont>
    </AppWrap>
  );
}

export default App;

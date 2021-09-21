/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Card from "../components/card";
import useMediaQuery from "../hooks/useMediaQuery";
import styled from "@emotion/styled";
import CheckMark from "../assets/check.svg";

const SuccessCont = styled.div`
  /* Layout */
  height: 18rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-items: center;

  /* Presentation */

  img {
    height: 8rem;
    width: 8rem;
  }

  h4 {
    color: grey;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Success = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
      <Card width={isDesktop ? "50rem" : "20rem"}>
        <SuccessCont className="success-cont">
          <h2>Purchase success!</h2>
          <img src={CheckMark} alt="Check mark image" />
          <h4>Access Link Sent To Email</h4>
        </SuccessCont>
      </Card>
  );
};

Success.propTypes = {};

export default Success;

/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Card from "../components/card";
import styled from "@emotion/styled";
import MailSvg from "../assets/mail-svgrepo-com.svg";
import useMediaQuery from "../hooks/useMediaQuery";

const AccessWrap = styled.div`
  /* Layout */
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  /* Presentation */

  img {
    height: 10rem;
    width: 10rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.4rem;
  }
`;

const Access = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div>
      <Card width={isDesktop ? "50rem" : "20rem"}>
        <AccessWrap>
          <h2>Access Email Sent!</h2>
          <img src={MailSvg} alt="Mail Image" />
        </AccessWrap>
      </Card>
    </div>
  );
};

Access.propTypes = {};

export default Access;

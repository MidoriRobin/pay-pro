/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import useMediaQuery from "../hooks/useMediaQuery";

const CardWrap = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ custHeight }) => (custHeight ? custHeight : "30rem")};
  width: ${({ custWidth }) => (custWidth ? custWidth : "20rem")};
  max-height: ${({ isDesktop }) => (isDesktop ? "50rem" : "40rem")};
  max-width: ${({ isDesktop }) => (isDesktop ? "60rem" : "40rem")};
  /* padding-left: 1rem;
  padding-right: 1rem; */

  /* Presentation */
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
`;

const Card = (props) => {
  const isDesktop = useMediaQuery("min-width: 1024px");

  return (
    <CardWrap
      isDesktop
      className="card-wrapper"
      custWidth={props.width}
      custHeight={props.height}
    >
      {props.children}
    </CardWrap>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  width: PropTypes.string,
  height: PropTypes.string,
  orientation: PropTypes.string,
};

export default Card;

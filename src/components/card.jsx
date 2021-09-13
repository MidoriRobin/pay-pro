/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const CardWrap = styled.div`
  /* Layout */
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ custHeight }) => (custHeight ? custHeight : "30rem")};
  width: ${({ custWidth }) => (custWidth ? custWidth : "20rem")};
  max-height: 40rem;
  max-width: 20rem;
  /* padding-left: 1rem;
  padding-right: 1rem; */

  /* Presentation */
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -webkit-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
  -moz-box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.36);
`;

const CardCont = styled.div``;

const Card = (props) => {
  return (
    <CardWrap
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
};

export default Card;

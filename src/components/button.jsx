import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const BigBtn = styled.button`
  /* Layout */
  width: 10rem;
  height: 8rem;

  /* Presentation */
  background-color: white;
  background-image: ${({ logo }) => (logo ? `url(${logo})` : "none")};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  outline: none;
  border: solid 1px black;
`;

const Button = (props) => {
  return <BigBtn>{props.children}</BigBtn>;
};

Button.propTypes = {
  children: PropTypes.any,
  image: PropTypes.any,
};

export default Button;

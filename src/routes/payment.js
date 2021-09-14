/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import Card from "../components/card";
import styled from "@emotion/styled";
import StripeLogo from "../assets/stripe-seek.svg";

const PayWrap = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20;

  /* Presentation */
`;

const BigBtn = styled.button`
  /* Layout */
  position: relative;
  width: 10rem;
  height: 8rem;

  /* Presentation */
  background-color: white;
  /* background-image: ${({ logo }) => (logo ? `url(${logo})` : "none")}; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  outline: none;
  border: solid 1px black;

  .large-btn::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

const HrLine = styled.hr`
  color: black;
  width: 15rem;
`;

const Payment = (props) => {
  return (
    <div>
      <Card>
        <PayWrap className="pay-option-wrap">
          <BigBtn className="large-btn" logo={StripeLogo}>
            Stripe
          </BigBtn>
          <HrLine />
          <BigBtn>Paypal</BigBtn>
        </PayWrap>
      </Card>
    </div>
  );
};

Payment.propTypes = {};

export default Payment;

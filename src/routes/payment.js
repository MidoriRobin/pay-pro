/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import Card from "../components/card";
import styled from "@emotion/styled";
import StripeLogo from "../assets/stripe-seek.svg";
import useMediaQuery from "../hooks/useMediaQuery";
import Modal from "../components/modal";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../components/Checkout";

const PayWrap = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: space-between;
    width: 35rem;
  }

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
  border: none;
  transition: all 0.5s;
  border-radius: 0.5rem;
  font-weight: var(--font-weight-2);

  :hover {
    cursor: pointer;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }

  @media (min-width: 1024px) {
    width: 12rem;
    height: 10rem;
    font-size: 1.5rem;
  }

  /* Attempting to set up btn backgrounds */
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

  @media (min-width: 1024px) {
    width: auto;
    height: 15rem;
  }
`;

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PKEY);

const Payment = (props) => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [open, setOpen] = useState(false);

  function flipModal() {
    setOpen((prevOpen) => !prevOpen);
  }

  // TODO: Add modal to page to process checkout for stripe/look into paypal processing

  return (
    <>
      <Modal flipModal={flipModal} show={open}>
        <h3>Modal</h3>
        <Elements stripe={stripePromise}>
          <Checkout />
        </Elements>
      </Modal>
      <Card width={isDesktop ? "50rem" : "20rem"}>
        <PayWrap className="pay-option-wrap">
          <BigBtn className="large-btn" logo={StripeLogo} onClick={flipModal}>
            Stripe
          </BigBtn>
          <HrLine />
          <BigBtn>Paypal</BigBtn>
        </PayWrap>
      </Card>
    </>
  );
};

Payment.propTypes = {};

export default Payment;

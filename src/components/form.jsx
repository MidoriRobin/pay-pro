/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const InputCont = styled.div`
  /* Layout */
  display: inline-block;
  width: fit-content;

  /* Presentation */

  border-bottom: 1px solid black;

  input {
    height: 1.5rem;
    width: 13rem;
    border: none;
    background-color: #f9f9f9;
    ${'' /* opacity: 0.11; */}
  }
`;

const FormCont = styled.form`
  /* Layout */
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  /* Presentation */

  label {
    font-weight: var(--font-weight-2);
    font-size: 1.1rem;
  }

  input.submit-btn {
    /* Layout */
    width: 4rem;
    margin-top: 1rem;
    /* Presentation */
  }
`;

const InputArea = styled.div`
  /* Layout */
  display: flex;
  flex-direction: column;
  /* Presentation */
`;

const Form = (props) => {
  const [formField, setFormField] = useState({});
  const [email, setEmail] = useState("");

  const emailRgx = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)

  function handleSubmit(event) {
    event.preventDefault();
    if (!(!emailRgx.test(email) || email === "")) {
      props.passEmail(email);
    } else {
      // TODO: Switch this out for an actual error response
      alert("Please enter an email")
    }
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  return (
    <FormCont className="form-cont" onSubmit={handleSubmit}>
      <InputArea>
        <label>Email:</label>
        <InputCont className="input-cont">
          <input type="text" value={email} onChange={handleEmail} />
        </InputCont>
      </InputArea>
      <input className="submit-btn" type="submit" value="Sign In" />
    </FormCont>
  );
};

Form.propTypes = {
  passEmail: PropTypes.func
};

export default Form;
